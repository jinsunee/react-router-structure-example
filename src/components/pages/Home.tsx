import React from 'react';
import styled from '@emotion/styled';

function Home (): React.ReactElement {
  return (
    <Container>
      <Header>Home</Header>
      <Content>
        <div className="title">Hello World! 🤓</div>
        <div className="content">This is a example for practicing react-router-dom.</div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 30px;
    color: #000;
    margin-bottom: 30px;
  }

  .content {
    font-weight: bold;
    font-size: 30px;
    color: #696F84;
  }
`;

export default Home;