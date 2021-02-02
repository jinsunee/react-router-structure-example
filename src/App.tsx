import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import First from './components/pages/First';
import Navbar from './components/shared/Navbar'
import React from 'react';
import Second from './components/pages/Second';
import Third from './components/pages/Third';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
