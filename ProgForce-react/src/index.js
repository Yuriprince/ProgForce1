import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import {BrowserRouter} from 'react-router-dom';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
