import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';

import {AuthContext} from './context';
import AuthValidation from './AuthValidation';
import LogIn from '../components/pages/LogIn';
import LogOut from '../components/pages/LogOut'

const AuthHandler: React.FC = ({children}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>('/');
  const location = useLocation();

  useEffect(() => {
      if (!pathname) {
          setPathname(location.pathname);
      }
  }, [location.pathname, pathname]);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}
    >
      <AuthValidation>{children}</AuthValidation>
      <Route
        path="/login"
        render={() => {
          return <LogIn pathname={pathname} />
        }}
       />
       <Route 
          path="/logout"
          render={() => {
            return <LogOut />
          }}
       />
    </AuthContext.Provider>
  );
}

export default AuthHandler;