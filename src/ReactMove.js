import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg'
import './ImageViewer.css';

const Images = [Image1, Image2, Image3]

class Example extends Component {
  constructor() {
    super()
      this.state = {
      show: false,
      activeImg: 0
    }
    this.changeActiveImage = this.changeActiveImage.bind(this);
  }

  updateShow = () => {
    this.setState((prev) => ({ show: !prev.show }));
  }
  changeActiveImage(event) {
    this.setState({
      activeImg: Number(event.currentTarget.dataset.id)
    },() => this.updateShow())
  }

  render() {
    const { updateShow, updateColor, state: { show } } = this;

    return (
      <div>
        <button onClick={updateShow}>
          Toggle
        </button>
        <Animate
          show={show}

          start={{
            opacity: 0,
            
          }}

          enter={{
            opacity: [1],
            
            timing: { duration: 200 },
          }}

          update={{ // catch interrupts e.g. click button in middle of leave
            opacity: [1],
            
            timing: { duration: 200 },
          }}

          leave={{
            opacity: [0],
            
            timing: { duration: 2000 },
          }}
        >
          {({ opacity }) => {
            return (
              <div style={{
                opacity,
                
              }}
              >
                {/* {opacity.toFixed(3)} */}
                <img src={Images[this.state.activeImg]}/>
              </div>
            );
          }}
        </Animate>
        <hr />
        <div className="small_image_wrapper">

          <img  className="small_image" 
                src={Image1} 
                alt="A wonderful bed"
                data-id={0}
                onMouseOver={this.changeActiveImage}
            />
          <img  className="small_image"
                src={Image2} 
                alt="A wonderful bed"
                data-id={1}
                onMouseOver={this.changeActiveImage}
            />
          <img  className="small_image"
                src={Image3} 
                alt="A wonderful bed"
                data-id={2}
                onMouseOver={this.changeActiveImage}
            />

        </div>
        <a href="https://react-move.js.org/#/">React-Move Documentation</a>
      </div>
    );
  }
}

export default Example