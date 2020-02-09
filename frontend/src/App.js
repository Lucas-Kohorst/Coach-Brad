import React from "react";
import "./App.css";
import VideoRecorder from "react-video-recorder";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./utils/firebase";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: firebase.firestore()
    };
  }

  // Writes to DB and returns ID of upload
  writeToDB = images => {
    this.state.db.collection("Poses").add({
      images: images
    }).then(value => {
      return value.id;
    })
  };

  // Gets all data from db
  getAllData = () => {
    this.state.db
      .collection("Poses")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
      });
  };

  // gets data by ID
  getById = id => {
    this.state.db
      .collection("Poses")
      .doc(id)
      .get()
      .then(doc => {
        const data = doc.data();
        console.log(data);
      });
  };

  handleClick = (url) => {
    window.URL = url;
    window.init();
  }

  render() {
    return (
      <React.Fragment>
        <div className="App App-header" id="wrapper">
          <p> Coach Brad</p>{" "}
          <a
            className="App-link"
            href="https://github.com/Lucas-Kohorst/Coach-Brad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
        </div>
        <h1 style={{ color: "white", textAlign: "center" }}>Real Time Test</h1>
        <div
          className="App App-header"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#282c34"
          }}
          id="wrapper"
        >
          <div>
            <canvas id="canvas"></canvas>
          </div>
          <div
            id="label-container"
            style={{ color: "white", paddingTop: "20vh", paddingLeft: "1em" }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button className="m-3" onClick={() => this.handleClick("https://teachablemachine.withgoogle.com/models/SrWBV53a/")}>Elbow</Button>
          <Button className="m-3" onClick={() => this.handleClick("https://teachablemachine.withgoogle.com/models/kE9ERP1y/")}>Legs</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
