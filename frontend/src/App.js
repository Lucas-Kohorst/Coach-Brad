import React from "react";
import "./App.css";
import VideoRecorder from "react-video-recorder";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    setTimeout(function() {
      console.log(window.webcam.canvas.toDataURL())
    }, 3000);
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
        <h1 style={{ color: "white", textAlign: "center" }}>
          Upload to Analyze
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#282c34",
            width: "75%",
            height: "75vh",
            margin: "0 auto"
          }}
        >
          <VideoRecorder
            isOnInitially={true}
            onRecordingComplete={videoBlob => {
              // Do something with the video...
              console.log("videoBlob", videoBlob);
            }}
          />
        </div>
        <div className="text-center pt-4">
          <Button variant="primary">Analyze</Button>
        </div>
        <div>
          <img src="./output1.png" alt="" />
        </div>
        {/* <h1 style={{ color: "white" }}>{JSON.stringify(window.webcam)}</h1> */}
      </React.Fragment>
    );
  };
}

export default App;
