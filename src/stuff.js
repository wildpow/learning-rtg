import React, { Component } from 'react';
import {Transition, TransitionGroup} from 'react-transition-group'
import Image0 from './Image1.jpg'
import Image1 from './Image2.jpg'
import Image2 from './Image3.jpg'
import './ImageViewer.css';

const duration = 300;
const Images = [Image0, Image1, Image2]

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting: { opacity: .9 },
  exited: { opacity: 0.01 }
};

const Fade = ({ in: inProp, currentImage }) => (
  <TransitionGroup>
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <img src={currentImage} alt="A wonderful bed"/>
      </div>
    )}
  </Transition>
  </TransitionGroup>
);

class App extends Component {
  state = { show: false, currentImg: Images[0] }
  handleClick = e => {
    this.setState({
      show: !this.state.show,
      currentImg: Images[Number(e.currentTarget.dataset.id)]
    })
  }
  render() {
    return (
      <div className="App">
      <TransitionGroup>
        <Fade in={this.state.show} currentImage={this.state.currentImg}/> 
      </TransitionGroup>
          <div className="small_image_wrapper">
          <img  className="small_image" 
                src={Image0} 
                alt="A wonderful bed"
                data-id={0}
                onMouseOver={this.handleClick}
                onMouseOut={this.handleClick}
            />
          <img  className="small_image"
                src={Image1} 
                alt="A wonderful bed"
                data-id={1}
                onMouseOver={this.handleClick}
                onMouseOut={this.handleClick}
            />
          <img  className="small_image"
                src={Image2} 
                alt="A wonderful bed"
                data-id={2}
                onMouseOver={this.handleClick}
                onMouseOut={this.handleClick}
            />

        </div>
      </div>
    );
  }
}

export default App;