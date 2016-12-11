var React = require('react');
var ReactDOM = require('react-dom');
var Timer = require('./Timer.js');

var Container = React.createClass({
  //https://www.youtube.com/watch?v=Rtrt3bSXso0
  // http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/
  mount: function() {
    console.log("mount");
    ReactDOM.render(
      <Timer start={Date.now()} />,
      document.getElementById('timer')
    );
  },
  
  unmount: function() {
    console.log("unmount");
    ReactDOM.unmountComponentAtNode(
      document.getElementById('timer')
    );
  },

  render: function() {
    return (
      <div>
        <div id="timer"></div>
        <button onClick={this.mount}>Mount</button><br/><br/>
        <button onClick={this.unmount}>Unmount</button>  
      </div>
    );
  
  }

});


module.exports = Container;
