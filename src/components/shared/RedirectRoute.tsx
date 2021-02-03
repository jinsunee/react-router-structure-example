import { Redirect, Route, RouteProps } from "react-router-dom";

import React from 'react';
import {RoutePageType} from '../../types/index';

interface Props {
  page: RoutePageType;
  flag: boolean;
  to: string;
}

function RedirectRoute (props: (Props & RouteProps)) {
  const {page, flag, to} = props;

  const Page = page;

  return (
    <Route 
      {...props}
      render={props => {
        if (flag) {
          return <Page {...props}/>;
        }

        return (
          <Redirect 
            to={to}
          />
        );
      }}
    />
  );
}

export default RedirectRoute;