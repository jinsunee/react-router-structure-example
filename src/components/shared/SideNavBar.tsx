import {NavLink, useLocation} from 'react-router-dom';

import React from 'react';
import {RouteType} from '../../types';
import styled from '@emotion/styled';

interface Props {
  routes: RouteType[];
}

function SideNavBar (props: Props) {
  const {routes} = props;

  const isLoggedUser = false;

  const logout = () => {
    localStorage.removeItem('userUID');
  }

  const login = () => {
    // history.pushState('/login')
  }

  const navItems = routes.map((route, index) => {
    return (
      <ul key={route.key}>
        <li>
          <NavLinkButton 
            activeStyle={{color: "#37C7BE"}} 
            to={route.path} 
            exact={route.exact}
          >
            {route.name}
          </NavLinkButton>
        </li>
      </ul>
    );
  });

  const renderAuthenticationButton = isLoggedUser ? (
    <AuthenticationButton onClick={logout}>LOGOUT</AuthenticationButton>
  ) : (
    <AuthenticationButton onClick={login}>LOGIN</AuthenticationButton>
  )
  
  return (
    <Nav>
      <div>
        <LogoButton to="/">LOGO</LogoButton>
        {navItems}
      </div>
      {renderAuthenticationButton}
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 177px;
  padding: 20px;
  background-color: #F2F2F2;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    width: 100%;
    height: 40px;
  }

  ul {
    list-style: none; /* Remove list bullets */
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    display: flex;
  }
`;

const LogoButton = styled(NavLink)`
  padding: 10px 20px;
  font-size: 36px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
  color: #C4C4C4;
  flex: 1;
  text-align: center;
  padding: 10px;
`;

const AuthenticationButton = styled.button`
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding: 15px;
  background-color: #37C7BE;
  border-radius: 10px;
`;


export default SideNavBar;