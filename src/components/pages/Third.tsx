import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

import React from 'react';

function SubPage() {
  // @ts-ignore
  let {id} = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

const Third = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Third Page</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/3-1`}>Sub-page-1</Link>
          </li>
          <li>
            <Link to={`${url}/3-2`}>Sub-page-2</Link>
          </li>
          <li>
            <Link to={`${url}/3-3`}>Sub-page-3</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact={true} path={path}>
          <h3>Please select a sub-page.</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <SubPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Third;