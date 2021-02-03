import React, { useContext } from 'react';

import { AuthContext } from '../../providers/context';
import { Redirect } from 'react-router-dom';

const LogIn = ({pathname}: {pathname: string}) => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  if (isUserLoggedIn) {
    return <Redirect to={pathname} />;
  }

  return (
    <div>
        <button
            onClick={() => {
                localStorage.setItem('isUserLoggedIn', 'true');
                setIsUserLoggedIn(true);
            }}
        >
            Login
        </button>
    </div>
);
}

export default LogIn;