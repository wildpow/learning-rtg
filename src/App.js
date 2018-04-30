import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';


// import './App.css';
import MakingMyOwn from './Makingmyown';

class App extends Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false
  };
  render() {
    // const {
    //   name, showValidationMessage, showValidationButton
    // } = this.state;
    return (
      <div>
        {/* <form>
          Your name
          <input 
            type="text"
            value={name}
            onFocus={() => {
              this.setState({
                showValidationMessage: false,
              });
            }}
            onChange={event => {
              this.setState({
                name: event.target.value,
                showValidationButton: true
              });
            }}
          />
          <CSSTransition
            in={showValidationMessage}
            timeout={300}
            classNames="message"
            unmountOnExit
            onExited={() => {
              this.setState({
                showValidationButton: true,
              });
            }}
          >
            {state => (
              <h3>Your name rocks!
              <CSSTransition
                in={state === 'entered'}
                timeout={3000}
                classNames="star"
                unmountOnExit
              >
                <div className='star'>⭐</div>
              </CSSTransition>
              </h3>
            )}
          </CSSTransition>
        </form>
        {showValidationButton ? (
          <button
            onClick={() => {
              this.setState(state => ({
                showValidationButton: false,
                showValidationMessage: true,
              }));
            }}
          >
          Validate form
        </button>
        ) : null}
        <h1> I'm learning how to use React transition Group</h1> */}
        <MakingMyOwn/>
      </div>
    );
  }
}

export default App;
