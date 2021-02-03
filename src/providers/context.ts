// react의 context api로 로그인 관련 전역상태객체를 만든다.
import React, {Dispatch, SetStateAction} from 'react';

interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextType>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => undefined,
});

