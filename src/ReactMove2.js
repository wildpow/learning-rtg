import React, { Fragment } from 'react';
import NodeGroup from 'react-move/NodeGroup';
import Image0 from './Image1.jpg';
import Image1 from './Image2.jpg';
import Image2 from './Image3.jpg';
import './ImageViewer.css'
const ImagesArray = [Image0, Image1, Image2];

class CoolStuff extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0
    };
  }
  changeActiveImage = (event) => {
    this.setState({
      currentImageIndex: Number(event.currentTarget.dataset.id)
    });
  }
  render() {
    return (
      <Fragment>
        <NodeGroup
          data={[this.state.currentImageIndex]}
          keyAccessor={d => d} 
          start={() => ({
            opacity: 0
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 300 }
          })}
          update={() => ({
            opacity: [1],
            timing: { duration: 300 }
          })}
          leave={() => ({
            opacity: [0],
            timing: { duration: 300 }
          })}
        >
          {nodes => (
            <div>
              {nodes.map(({ key, data, state: { opacity } }) => (
                <div key={key} style={{ opacity, position: 'relative',maxHeight: 500, maxWidth: 500 }}>
                  <img
                    style={{position: 'absolute'}}
                    src={ImagesArray[data]}
                    alt="blbaladfg"
                  />
                </div>
              ))}
            </div>
          )}
        </NodeGroup>
        <div className="small_image_wrapper" style={{position: 'relative', top: 500}}>
          <img
            className="small_image"
            src={Image0}
            alt="A wonderful bed"
            data-id={0}
            onMouseOver={this.changeActiveImage}
          />
          <img
            className="small_image"
            src={Image1}
            alt="A wonderful bed"
            data-id={1}
            onMouseOver={this.changeActiveImage}
          />
          <img
            className="small_image"
            src={Image2}
            alt="A wonderful bed"
            data-id={2}
            onMouseOver={this.changeActiveImage}
          />
        </div>
      </Fragment>
    );
  }
}
export default CoolStuff