import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


 
export default class Gallery extends Component {
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
      <div style={{ padding: "1em" }}>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          <img src={this.props.images[0]} onClick={this.myfunction} />
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={
              "https://firebasestorage.googleapis.com/v0/b/coach-brad.appspot.com/o/poses%2F" +
              this.props.images[photoIndex] +
              "?alt=media&token=9553b4cf-392f-4598-aae2-1ac4f136a3b0"
            }
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length]
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              })
            }
            imageCaption="test"
            imagePadding="0"
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length
              })
            }
          />
        )}
      </div>
    );
  }
}