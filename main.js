// react
// it somehow react and react dom needs to be together here.
var React = require('react');
var ReactDOM = require('react-dom');

// app
// ./
// components
// App
var Timer = require('./components/Timer.js');

// react
// dom
// render
// <Timer>
// start
// {}
// Date.now()
// document
// get element by id
// main
ReactDOM.render(
  <Timer start={Date.now()} />,
  document.getElementById('main')
);
