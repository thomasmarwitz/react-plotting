import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import Controller from './Controller'

ReactDOM.render(
  <React.StrictMode>
    <Graph />
    <Controller />
  </React.StrictMode>,
  document.getElementById('root')
);
