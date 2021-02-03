import './App.css';

import AuthHandler from './providers/AuthHandler'
import Navbar from './components/shared/Navbar'
import React from 'react';
import RootRouter from './components/routers/RootRouter'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthHandler>
        <Navbar />
        <hr />
        <RootRouter />
      </AuthHandler>
    </Router>
  );
}

export default App;
