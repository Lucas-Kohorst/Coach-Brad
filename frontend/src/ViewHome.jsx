import React from "react";
import Gallery from "./components/Gallery"

class ViewHome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {galleryArray: [<Gallery/>, <Gallery/>]}
    }

    

    render() {
        
        const temp = this.state.galleryArray.map((forGal) =>
            <li>{forGal}</li>);
        return (
            <React.Fragment>
            <ul>{temp}</ul>
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


