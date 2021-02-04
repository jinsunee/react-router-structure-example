import {Link, useParams} from 'react-router-dom';
import React, {useState} from 'react';

import Column from '../shared/Column';
import Row from '../shared/Row';
import close from '../../assets/icons/close.svg';
import leftArrow from '../../assets/icons/left_arrow.svg';
import {playList} from '../../assets/playlist';
import rightArrow from '../../assets/icons/right_arrow.svg';
import styled from '@emotion/styled';

function PlayList (): React.ReactElement {
  const params = useParams();
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  console.log(params);
  
  const _onMouseOver = (index: number): void => {
    setHoverIndex(index);
  }

  const _onMouseOut = (): void => {
    setHoverIndex(-1);
  }

  const renderPlayList = playList.map((list, index) => {
    return (
      <Link to={`/play_list/${list.id}`} style={{ textDecoration: 'none', color: '#000'}}>
        <Row 
          key={list.id}
          hoverColor={index === hoverIndex ? "#DCF0EF" : null} 
          mouseOver={(): void => _onMouseOver(index)} 
          mouseOut={_onMouseOut}>
          <Column>{list.id}</Column>
          <Column flex={6}>{list.title}</Column>
          <Column flex={2}>{list.singer}</Column>
        </Row>
      </Link>
    );
  });

  const renderModal = (): React.ReactElement | null => {
    // @ts-ignore
    let id = parseInt(params.id);
    if (id || id === 0) {
      const data = playList[id];

      const renderLeftArrow = id > 0 ? (
        <LeftArrow to={`/play_list/${id-1}`}>
        <img alt="" src={leftArrow} />
      </LeftArrow>
      ) : (
        <EmptySpace />
      );

      const renderRightArrow = id < playList.length - 1 ? (
        <RightArrow to={`/play_list/${id+1}`}>
          <img alt="" src={rightArrow} />
        </RightArrow>
      )  : (
        <EmptySpace />
      );


      return (
        <>
            <Overlay />
            <Modal>
              <CloseButton to="/play_list">
                <img alt="" src={close} />
              </CloseButton>
              {renderLeftArrow}
              <Wrapper>
                <iframe 
                  width="494" 
                  height="278" 
                  src={`https://www.youtube.com/embed/${data.youtubeSrcID}`} 
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
                <div className="info-wrapper">
                  <div className="title">{data.title}</div>
                  <div className="line" />
                  <div className="singer">{data.singer}</div>
                </div>
              </Wrapper>
              {renderRightArrow}
            </Modal>
        </>
      );
    }

    return null;
  }

  return (
    <Container>
      <Row>
        <Column>ID</Column>
        <Column flex={6}>Title</Column>
        <Column flex={2}>Singer</Column>
      </Row>
      <hr />
      {renderPlayList}
      {renderModal()}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  /* padding: 30px 40px; */
`;

const Overlay = styled.div`
  z-index: 97;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
`;

const Modal = styled.div`
  z-index: 97;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 574px;
  height: 522px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  embed {
    border: none;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    
    .title {
      font-weight: bold;
      font-size: 30px;
      color: #000;
    }

    .line {
      width: 33px;
      height: 4px;
      background-color: #E5E5E5;
      margin: 10px 0;
    }

    .singer {
      font-size: 20px;
    }
  }
`;

const LeftArrow = styled(Link)`
  
`;

const RightArrow = styled(Link)`
  
`;

const EmptySpace = styled.div`
  width: 40px;
  height: 40px;
`;

const CloseButton = styled(Link)`
  z-index:99;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default PlayList;