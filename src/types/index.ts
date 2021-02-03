import React from 'react';
import { RouteComponentProps } from "react-router-dom";

// 렌더링할 component type
export type RoutePageType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;

export type RouteType = {
  key: string;
  path: string;
  name: string;
  exact?: boolean;
  component: (props?: any) => React.ReactElement;
};
  