import {RouteComponentProps, withRouter} from 'react-router-dom'

import React from 'react';

const First = withRouter((props: RouteComponentProps) => {
  console.log(props);
  return (
    <div>
      <h1>First Page</h1>
    </div>
  );
});

export default First;
