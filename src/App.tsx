import './App.css';

import AuthHandler from './providers/AuthHandler'
import React from 'react';
import RootLayout from './components/layouts/RootLayout';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthHandler>
        <RootLayout />
      </AuthHandler>
    </Router>
  );
}

export default App;
