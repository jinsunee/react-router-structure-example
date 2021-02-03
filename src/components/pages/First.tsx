import {RouteComponentProps, withRouter} from 'react-router-dom'

import React from 'react';

const First = withRouter((props: RouteComponentProps) => {
  console.log(props);
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/w-EoAXhKOLk"></iframe>
    </div>
  );
});

export default First;
