import React from 'react';
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg'
import './ImageViewer.css';
import { CSSTransition } from 'react-transition-group';


class ImageViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      SelectedImage: 0,
      in: false
      
    }
    this.changeActiveImage = this.changeActiveImage.bind(this)
  }

  changeActiveImage(event) {
    this.setState({
      SelectedImage: Number(event.currentTarget.dataset.id),
      in: true
    }, () => this.renderLargeImage())
  }
  renderLargeImage() {
    switch(this.state.SelectedImage) {
      case 0:
        return <img src={Image1} alt="totally this" className="large_image"/>
        
      case 1:
        return <img src={Image2} alt="totally this" className="large_image"/>
        
      case 2:
        return <img src={Image3} alt="totally this" className="large_image"/>
        
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <CSSTransition timeout={300} classNames="fade" in={false}>
        {this.renderLargeImage()}
        </CSSTransition>
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

        
      </div>
    )
  }
 
}
export default ImageViewer

