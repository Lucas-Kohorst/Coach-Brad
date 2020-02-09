import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import img1 from '../images/download.jpg';
import img2 from '../images/download-1.jpg';
import img3 from '../images/download-2.jpg';
import img4 from '../images/download-3.jpg';
import img5 from '../images/images.jpg';
 
const images = [
  img1,
    img2,
    img3,
    img4,
    img5
];
 
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
        <img src={img1}  onClick={this.myfunction}/>
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            imageCaption = "test"
            imagePadding = "0"
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
          
        )}
      </div>
    );
  }
}