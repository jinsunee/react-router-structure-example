import { CSSTransition, TransitionGroup } from 'react-transition-group'
import React, {useContext} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';

import { AuthContext } from '../../providers/context';
import First from '../pages/First';
import Item from '../pages/Item';
import Items from '../pages/Items';
import NotFound from '../pages/NotFound';
import Private from '../pages/Private';
import Second from '../pages/Second';
import Third from '../pages/Third';
import styled from '@emotion/styled';

// withRouter를 통해서 route(history, location etc) 관련 객체를 받아온다.
const RootRouter = withRouter((props: RouteComponentProps) => {
  const {isUserLoggedIn} = useContext(AuthContext);
  return (
    <Wrapper>
       <TransitionGroup>
          <CSSTransition
            key={props.location.key} // key를 "123"이렇게 정적인 값으로 해주니 transition이 작동하지않았다.
            classNames={'anim'}
            timeout={300}
          >
            <Switch>
              <Route path="/" exact component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
              <Route path="/items" component={Items} exact={true} />
              <Route path="/items/:userId" component={Item} exact={true} />
              <Route 
                path="/private"
                render={() => {
                  if (isUserLoggedIn) {
                    return <Private />
                  }

                  return <Redirect to="/" />
                }}
              />
              <Route>
                <NotFound />
            </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </Wrapper>
  );
})

const Wrapper = styled.div`
  .anim-enter {
    opacity: 0;
    z-index: 1;
  }

  .anim-exit {
      display: none;
  }

  .anim-enter.anim-enter-active {
      opacity: 1;
      transition: opacity 1s ease-in;
  }
`;

export default RootRouter;