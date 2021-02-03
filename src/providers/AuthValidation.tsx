import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from './context';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';

const AuthValidation: React.FC = ({children}) => {
  const {isUserLoggedIn, setIsUserLoggedIn} = useContext(AuthContext);

  // 페이지가 렌더링 하기 전에 현재 로그인된 상태인지 알아야한다.
  const [isGettingDataFromLS, setIsGettingDataFromLS] = useState(true);

  useEffect(() => {
    const isPreviousLoggedIn = localStorage.getItem('isUserLoggedIn');

    if (isPreviousLoggedIn) {
      setIsUserLoggedIn(true);
      setIsGettingDataFromLS(false);
    } else {
      setIsGettingDataFromLS(false);
    }
  }, [setIsUserLoggedIn]);

  if (isGettingDataFromLS) {

    return (
      <div>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <h2>Getting data from LS</h2>
      </div>
    );
  }

  if (isUserLoggedIn) {
    return <>{children}</>
  } 
  return <Redirect to="/login" />
}

export default AuthValidation;