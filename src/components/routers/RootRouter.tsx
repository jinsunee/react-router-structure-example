import {Route, Switch} from 'react-router-dom';

import React from 'react';
import {RouteType} from '../../types';

interface Props {
  routes: RouteType[];
} 
function RootRouter(props: Props): React.ReactElement {
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
      {renderRoutes}
    </Switch>
  );
}

export default RootRouter;