import React from "react";
import Gallery from "./components/Gallery"

class ViewHome extends React.Component {
    constructor(props, galleryArray) {
      super(props);
      this.state = {galleryArray: [<Gallery text={["hi","bye", "yo" ]} />, <Gallery/>]}
    }
    // this.props.galleryArray = {[[<Gallery tex ]} />, <Gallery/>]]}

    

    render() {
      <div>
        const temp = this.state.galleryArray.map((forGal) =>
            <li>{forGal}</li>);
        return (
            <React.Fragment>
            <h1 style={{ color: "white", textAlign: "center" }}>The Locker Room</h1>
        <div
          className="App App-header"
          padding="100px"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#282c34"
          }}
          id="wrapper"
        >
        
        <ul>{temp}</ul>
        </div>
            
            </React.Fragment>
        )
      </div>
    }

    addGallery(Gallery){
        var tempArray = this.state.galleryArray;
        tempArray.push(Gallery);
        this.setState({galleryArray: tempArray});
    }


    }
    
    export default ViewHome;


