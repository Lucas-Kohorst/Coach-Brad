import React, { Image } from "react";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./utils/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewHome from "./ViewHome";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: [],
      predictionData: [],
      db: firebase.firestore(),
      storageRef: firebase.storage().ref(),
      hash: null,
      url: "",
      images: null
    };
  }

  componentDidMount = () => {
    this.getAllData();
    this.getAllStoredImages();
  };

  getFrame = async state => {
    var url = window.ctx.canvas.toDataURL();
    var canvas = window.webcam.canvas;
    var predictionDataLocal = this.state.predictionData;
    predictionDataLocal.push({ url: url, canvas: canvas });
    this.setState({
      predictionData: predictionDataLocal
    });
  };

  start = state => {
    window.intervalID = setInterval(() => {
      this.getFrame(this.state);
    }, 500);
  };

  stop = async state => {
    window.clearInterval(window.intervalID);
    var predictionDataLocal = this.state.predictionData;
    var predictions = [];
    for (var elm in predictionDataLocal) {
      var prediction = await window.getModelsPredictions(
        predictionDataLocal[elm].canvas
      );
      var ref = this.state.storageRef.child(
        "poses/image" + Date.now() + Math.random() + elm
      );
      ref
        .putString(predictionDataLocal[elm].url, "data_url")
        .then(function(snapshot) {
          var pathToImage = snapshot.metadata.fullPath;
          return pathToImage;
        })
        .then(pathToImage => {
          console.log(pathToImage);
          predictions.push({
            img: pathToImage,
            prediction: prediction
          });
        });
    }
    this.writeToDB(predictions);
    // var framesLocal = this.state.frames;
    // console.log(framesLocal)
    // framesLocal = [];
    // this.setState({
    //   frames: framesLocal
    // });
  };

  // Writes to DB and returns ID of upload
  writeToDB = async images => {
    await this.state.db
      .collection("Poses")
      .add({ images })
      .then(value => {
        console.log(value.id);
        this.setState({ hash: value.id });
      });
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

  getAllStoredImages = () => {
    var projectRef = firebase.storage().ref("poses");
    var images = [];
    projectRef
      .listAll()
      .then(function(result) {
        console.log(result);
        for (var i in result.items) {
          images.push(result.items[i].fullPath);
        }
        console.log(images.length);
        this.setState({
          images: images
        });
      })
      .then(function(images) {
        this.setState({
          images: images
        });
      });
  };

  displayImageFromPath = async path => {
    var ref = this.state.storageRef.child(path);
    console.log(ref);
    var url = await ref.getDownloadURL();
    return url;
  };

  getImageFromData = async hash => {
    this.state.db
      .collection("Poses")
      .doc(hash)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
        }
      });
  };

  handleClick = url => {
    window.URL = url;
    window.init();
  };

  displayGallery = () => {
    console.log(true);
  };

  render() {
    return (
      <React.Fragment>
        <div className="App App-header" id="wrapper">
          <p> Coach Brad </p>{" "}
          <a
            className="App-link"
            href="https://github.com/Lucas-Kohorst/Coach-Brad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github{" "}
          </a>{" "}
        </div>{" "}
        <h1 style={{ color: "white", textAlign: "center" }}>
          {" "}
          Analyze your shot{" "}
        </h1>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/coach-brad.appspot.com/o/poses%2F" +
            "image15812423341210.6006357473938830" +
            "?alt=media&token=9553b4cf-392f-4598-aae2-1ac4f136a3b0"
          }
        ></img>
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
            <canvas id="canvas"> </canvas>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              id="label-container"
              style={{
                color: "white",
                paddingTop: "20vh",
                paddingLeft: "1em"
              }}
            ></div>{" "}
          </div>
        </div>{" "}
        <div>
          <img src={this.state.url} />
        </div>
        <div className="text-center">
          <Button variant="success" onClick={() => this.start(this.state)}>
            Start{" "}
          </Button>{" "}
          <Button variant="danger" onClick={() => this.stop(this.state)}>
            Stop{" "}
          </Button>{" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="m-3"
              onClick={() =>
                this.handleClick(
                  "https://teachablemachine.withgoogle.com/models/SrWBV53a/"
                )
              }
            >
              {" "}
              Elbow{" "}
            </Button>{" "}
            <Button
              className="m-3"
              onClick={() =>
                this.handleClick(
                  "https://teachablemachine.withgoogle.com/models/kE9ERP1y/"
                )
              }
            >
              {" "}
              Legs{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        <ViewHome all={this.state.images} />
      </React.Fragment>
    );
  }
}
