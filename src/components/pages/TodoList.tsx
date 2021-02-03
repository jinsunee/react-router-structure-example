import React from 'react';
import styled from '@emotion/styled';
import {useLocation} from 'react-router-dom';

function TodoList (): React.ReactElement {
  const {pathname} = useLocation();
  return (
    <Container>
      <div className="title">Empty :(</div>
      <div className="content">pathname: {pathname}</div>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  .title {
    font-size: 36px;
    color: #696F84;
    margin: 20px 0;
  }

  .content {
    font-size: 20px;
    color: #000;
  }
`;


export default TodoList;