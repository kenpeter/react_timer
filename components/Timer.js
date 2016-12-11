var React = require('react');

var Timer = React.createClass({

  // get init state
  // func
  // return
  // {}
  // elapsed:
  // 0
  getInitialState: function(){
    // This is called before our render function. The object that is 
    // returned is assigned to this.state, so we can use it later.
    return { elapsed: 0 };
  },

  // component
  // did
  // mount
  // func
  componentDidMount: function(){
    // componentDidMount is called by react when the component 
    // has been rendered on the page. We can set the interval here:
    // this
    // timer, is another func
    // set interval
    // this.tick
    // 50
    this.timer = setInterval(this.tick, 50);
  },

  // component
  // will
  // unmount
  // func
  componentWillUnmount: function(){
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    // clear interval
    // this.timer
    clearInterval(this.timer);
  },

  
  // tick
  // func
  // this
  // set state
  // {}
  // {elapsed: new Date() - this.props.start}
  tick: function(){

      // This function is called every 50 ms. It updates the 
      // elapsed counter. Calling setState causes the component to be re-rendered

      this.setState({elapsed: new Date() - this.props.start});
  },

  // render
  // func
  render: function() {
    /* e.g.
      Timer.js:64 ----- test ---------
      Timer.js:65 27880
      Timer.js:66 278.8
      Timer.js:67 279
      Timer.js:75 27.9
      Timer.js:76 27.9
      Timer.js:64 ----- test ---------
      Timer.js:65 27930
      Timer.js:66 279.3
      Timer.js:67 279
      Timer.js:75 27.9
      Timer.js:76 27.9
    */
  
    // test
    console.log("----- test ---------");
    console.log(this.state.elapsed); // it is in milli-sec
    // divide 100
    console.log(this.state.elapsed / 100);
    // e.g. 3.5 == 4
    console.log(Math.round(this.state.elapsed / 100));


        
    var elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    var seconds = (elapsed / 10).toFixed(1);    



    //test
    // now do the rest
    console.log(elapsed / 10);
    
    // toFixed(1) == 27.35 == 27.4
    console.log((elapsed / 10).toFixed(1));  



    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return (
      <div>
        <p>This example was started <b>{seconds} seconds</b> ago.</p>
      </div>
    );
  }
});


module.exports = Timer;
