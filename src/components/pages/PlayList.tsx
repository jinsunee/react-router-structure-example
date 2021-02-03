import React from 'react';
import styled from '@emotion/styled';

function PlayList (): React.ReactElement {
  return (
    <Container>
      <Header>Music PlayList</Header>
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

export default PlayList;