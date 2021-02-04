import { Link, Redirect } from 'react-router-dom';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../../providers/context';
import Loader from 'react-loader-spinner';
import moveIcon from '../../assets/icons/move.svg'
import styled from '@emotion/styled';

// const LogIn = ({pathname}: {pathname: string}) => {
//   const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

//   if (isUserLoggedIn) {
//     return <Redirect to={pathname} />;
//   }

//   return (
//     <div>
//         <button
//             onClick={() => {
//                 localStorage.setItem('username', 'true');
//                 setIsUserLoggedIn(true);
//             }}
//         >
//             Login
//         </button>
//     </div>
// );
// }

interface Props {
	pathname: string;
}

function LogIn (props: Props): React.ReactElement {
	const {pathname} = props;
	const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
	const [nickname, setNickname] = useState<string>();
	const [warning, setWarning] = useState<boolean>(false);
	const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

	const _onChange = (e: React.FormEvent<HTMLInputElement>) => {	
		setNickname(e.currentTarget.value);
	}

	const onSubmit = () => {
		if (!nickname) {
			setWarning(true);
			return;
		}

		setLoadingSubmit(true);
	
		setTimeout(() => {
			localStorage.setItem('nickname', nickname);
			setWarning(false)
			setLoadingSubmit(false);
			setIsUserLoggedIn(true);
		}, 2000);
	}

	const renderSubmitButton = (): React.ReactElement => {
		if (loadingSubmit) {
			return (
				<button className="submit-button" disabled>
					<Loader type="ThreeDots" color="#fff" height={40} width={40} />
				</button>
			);
		}
		
		return (
			<button onClick={onSubmit} className="submit-button">
				<img alt="" src={moveIcon} />
			</button>
		);
	}
	
  if (isUserLoggedIn) {
    return <Redirect to="/" />;
  }

	return (
		<Container>
			<Title>LOG IN</Title>
			<FormWrapper style={{ borderBottomColor: warning ? "#F39999" : "#000" }}>
				<input onChange={_onChange} value={nickname} placeholder="Enter your nickname." />
				{renderSubmitButton()}
			</FormWrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-size: 36px;
	font-weight: bold;
	color: #000;
	margin-bottom: 60px;
`;

const FormWrapper = styled.div`
	display: flex;
	border-bottom: 2px solid #000;
	padding-bottom: 10px;
	
	input {
		flex: 1;
		font-weight: bold;
		font-size: 36px;
		color: #000;
		border: none;

		&::placeholder {
			color: #C4C4C4;
		}

		&:focus {
			outline: none;
		}
	}

	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: #000;
		border-radius: 10px;
		border: none;
		
		&:hover {
			background-color: #37C7BE;
		}

		&:focus {
			outline: none;
		}
	}
`;

export default LogIn;