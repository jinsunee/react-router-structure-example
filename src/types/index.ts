import { RouteComponentProps } from "react-router-dom";

// 렌더링할 component type
export type RoutePageType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;