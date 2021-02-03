import {NavLink, useLocation} from 'react-router-dom';

import React from 'react';
import {RouteType} from '../../types';
import styled from '@emotion/styled';

interface Props {
  routes: RouteType[];
}

const NavigationBar = (props: Props) => {
  const {routes} = props;
  const {pathname} = useLocation();
  
  const navItems = routes.map((route, index) => {
    const fontColor = pathname === route.path ? {color: "#37C7BE"} : {color: "#C4C4C4"};
    return (
      <ul key={route.key}>
        <li>
          <NavLinkButton style={fontColor} to={route.path}>{route.name}</NavLinkButton>
        </li>
      </ul>
    );
  });

    return (
      <Container>
        {navItems}
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    list-style: none; /* Remove list bullets */
    padding: 0;
    margin: 0;
    padding: 20px 60px 20px 0px;
  }

  li {
    display: flex;
  }
`;

const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`;

export default NavigationBar;