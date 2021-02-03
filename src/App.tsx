import './App.css';

import AuthHandler from './providers/AuthHandler'
import Navbar from './components/shared/Navbar'
import React from 'react';
import RootLayout from './components/layouts/RootLayout';
import RootRouter from './components/routers/RootRouter'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthHandler>
        <RootLayout />
        {/* <Navbar />
        <hr />
        <RootRouter /> */}
      </AuthHandler>
    </Router>
  );
}

export default App;
