import {Route, Switch} from 'react-router-dom';

import NotFound from '../pages/NotFound';
import PlayList from '../pages/PlayList';
import React from 'react';

function PlayListRouter(): React.ReactElement {
  return (
    <Switch>
      <Route key="PLAY_LIST" path="/play_list" component={PlayList} exact />
      <Route key="PLAY_LIST_ID" path="/play_list/:id" component={PlayList} />
    </Switch>
  );
}

export default PlayListRouter;