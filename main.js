// react
// it somehow react and react dom needs to be together here.
var React = require('react');
var ReactDOM = require('react-dom');

// app
// ./
// components
// App
var App = require('./components/Container.js');

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
  <App />,
  document.getElementById('main')
);
