import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.Fragment>
    <Helmet>
      <title>Todo List</title>
      <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet" />
    </Helmet>
    <App />
  </React.Fragment>,
document.getElementById('root'));
