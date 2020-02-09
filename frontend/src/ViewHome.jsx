import React from "react";
import Gallery from "./components/Gallery";

class ViewHome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { galleryArray: [] };
  }

  addGallery(Gallery) {
    var tempArray = this.state.galleryArray;
    console.log(tempArray);
    tempArray.push(Gallery);
    this.setState({ galleryArray: tempArray });
  }

  render() {
    console.log(this.state.galleryArray);
    var i;
    var tempAll = this.props.all;
    console.log(tempAll.length)
    console.log(tempAll)
    console.log(this.props.all[9]); 
    for (i = 0; i < tempAll.length; i++) {
      console.log(i);
      this.addGallery(<Gallery images={this.props.all[i]} />);
    } 
    return (
      <React.Fragment>
        <h1 style={{ color: "white", textAlign: "center" }}>Gallery</h1>
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
          <ul>
            {this.state.galleryArray.map(forGal => (
              <li>{forGal}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewHome;
