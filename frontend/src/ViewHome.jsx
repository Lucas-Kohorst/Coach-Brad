import React from "react";
import "./ViewHome.css";
import Gallery from "./components/Gallery"
import locker from "./images/locker-room.jpg"

class ViewHome extends React.Component {
    constructor(props, galleryArray) {
      super(props);
      this.state = {galleryArray: [<Gallery text={["hi","bye", "yo" ]} />, <Gallery/>, <Gallery/>, <Gallery/>, <Gallery/>, <Gallery/>]}
    }
    // this.props.galleryArray = {[[<Gallery tex ]} />, <Gallery/>]]}

    

    render() {
        
        const temp = this.state.galleryArray.map((forGal) =>
            <li>{forGal}</li>);
        return (
        <React.Fragment >
          <div className="ViewHome">
            //<h1 style={{ color: "white", textAlign: "center" }}>The Locker Room</h1>
         <div
          className="ViewHome"
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
        </div>
        </React.Fragment>
        )
    }

    
    addGallery(Gallery){
        var tempArray = this.state.galleryArray;
        tempArray.push(Gallery);
        this.setState({galleryArray: tempArray});
    }


    }
    
    export default ViewHome;


