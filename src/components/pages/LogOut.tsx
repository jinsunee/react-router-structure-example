import React, { useContext } from 'react';

import { AuthContext } from '../../providers/context';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  if (isUserLoggedIn) {
      return (
          <div>
              <button
                  onClick={() => {
                      localStorage.removeItem('isUserLoggedIn');
                      setIsUserLoggedIn(false);
                  }}
              >
                  Log out
              </button>
          </div>
      );
  } else {
      return <Redirect to="/login" />;
  }
};

export default LogOut;