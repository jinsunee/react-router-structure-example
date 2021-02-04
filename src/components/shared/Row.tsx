import React, { useState } from 'react';

import styled from '@emotion/styled';

interface Props {
	children: any;
	hoverColor?: string | null;
	onClick?: () => void;
	mouseOver?: () => void;
	mouseOut?: () => void;
}

function Row(props: Props): React.ReactElement {
	const {children, hoverColor, onClick, mouseOver, mouseOut} = props;
	
	return (
		<Container 
			style={{ 
				backgroundColor: hoverColor || '#fff',
			}}
			onClick={onClick}
			onMouseOver={mouseOver}
			onMouseLeave={mouseOut}
		>
			{children}
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	padding: 10px;
`;

export default Row;