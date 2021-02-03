import Home from '../pages/Home';
import PlayList from '../pages/PlayList';
import React from 'react';
import RootRouter from '../routers/RootRouter';
import {RouteType} from '../../types';
import SideNavBar from '../shared/SideNavBar';
import TodoListLayout from '../layouts/TodoListLayout';
import styled from '@emotion/styled';

const routes: RouteType[] = [
  {
    key: "HOME",
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
  {
    key: "TODO_LIST",
    path: "/todo",
    name: "Todo List",
    component: TodoListLayout,
  },
  {
    key: "PLAY_LIST",
    path: "/play_list",
    name: "Music PlayList",
    exact: true,
    component: PlayList,
  },
];

function RootLayout(): React.ReactElement {
  return (
    <Container>
      <SideNavBar routes={routes} />
      <RootRouter routes={routes} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default RootLayout;