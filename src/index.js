import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App {...window.__STATE__}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);


