# Design react project structure with react-router-dom

![image](https://user-images.githubusercontent.com/31176502/106722553-736b7500-6649-11eb-91cb-7ed02bbf2a51.png)

```
/
  /src
    /components
      /layouts
      /pages
      /routers
      /handler
      /shared
    /providers
```

# components

## /layouts

`layout` is constructured with `navbar`, `page`, `router` like bottom picture.

## /pages

The components in pages directory have logic, UI components etc.

## /routers

only having components like `<Switch>`, `<Route>`.

```
...
return (
  <Switch>
    <Route ... />
    <Route ... />
    ...
  </Switch>
);
```

## /handlers

included in AuthHandler.

# providers

Related to state management like context API, redux.
