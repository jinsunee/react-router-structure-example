import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';

import PlayList from '../pages/PlayList';
import PlayListRouter from '../routers/PlayListRouter';
import React from 'react';
import styled from '@emotion/styled';

function PlayListLayout(): React.ReactElement {
  const match = useRouteMatch();
  const params = useParams();

  return (
    <Container>
      <Header>Music PlayList</Header>
      {/* <PlayList />
      {
        params && (
          <>
            <Overlay />
            <Modal>
              <div className="wrapper" />
            </Modal>
          </>
        )
      } */}
      <PlayListRouter />
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

const Overlay = styled.div`
  z-index: 98;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
`;

const Modal = styled.div`
  z-index: 98;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 574px;
    height: 522px;
    background-color: #fff;
    border-radius: 10px;
  }
`;

export default PlayListLayout;