import NavigationBar from '../shared/NavigationBar';
import React from 'react';
import {RouteType} from '../../types';
import TodoList from '../pages/TodoList';
import TodoListRouter from '../routers/TodoListRouter';
import styled from '@emotion/styled'

function TodoListLayout(): React.ReactElement {
  
  const routes: RouteType[] = [
    {
      key: "NOT_STARTED",
      path: "/todo/not_started",
      name: "Not started",
      component: TodoList,
    },
    {
      key: "IN_PROGRESS",
      path: "/todo/in_progress",
      name: "In Progress",
      exact: true,
      component: TodoList,
    },
    {
      key: "COMPLETED",
      path: "/todo/completed",
      name: "Completed",
      exact: true,
      component: TodoList,
    },
  ];
  
  return (
    <Container>
      <Header>Todo List</Header>
      <NavigationBar routes={routes} />
      <TodoListRouter routes={routes} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 30px 40px;
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

export default TodoListLayout;