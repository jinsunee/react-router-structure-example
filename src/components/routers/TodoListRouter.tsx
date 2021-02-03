import {Redirect, Route, Switch} from 'react-router-dom';

import NotFound from '../pages/NotFound';
import React from 'react';
import {RouteType} from '../../types';

interface Props {
  routes: RouteType[];
} 

function TodoListRouter(props: Props) {
  const {routes} = props;
  
  const renderRoutes = routes.map((route, index) => (
    <Route 
      key={route.key}
      path={route.path}
      name={route.name}
      component={route.component}
      exact={route.exact}
    />
  ));

  
  return (
    <Switch>
      <Route path="/todo" exact render={() => <Redirect to="/todo/not_started" />} />
      {renderRoutes}
      <Route component={NotFound} />
    </Switch>
  );
}

export default TodoListRouter;