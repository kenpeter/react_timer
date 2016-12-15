## Intro

Timer app demo based on this tutorial: http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/

## Install

* npm install

## Run

* npm run build
* Visit index.html with your browser.

## What I learned

getInitialState, which set up initial json data

componentDidMount, a good place to do something with the dom or most of the actions

componentWillUnmount, a good place to clean up.

Every time we call setState, the most affected method will be render. Particularly, if we set it in setInterval.

Something like onClick={...}
```
<button onClick={this.mount}>Mount</button>
```


Something like this, able to render a component in code
```
ReactDOM.render(
  <Timer start={Date.now()} />,
  document.getElementById('timer')
);
```


