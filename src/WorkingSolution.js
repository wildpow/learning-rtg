import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm A fade Transition!
      </div>
    )}
  </Transition>
);

class App extends Component {

  state = { show: false }

  handleClick = e => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="App">
          <Fade in={this.state.show}/>
          <button onClick={this.handleClick}>TOGGLE</button>
      </div>
    );
  }
}

export default App;