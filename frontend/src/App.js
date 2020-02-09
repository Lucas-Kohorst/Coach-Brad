import React from "react";
import "./App.css";
import { Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      frames: [],
    };
  }

  getFrame = state => {
    var url = window.webcam.canvas.toDataURL();
    var flag = state.flag;
    console.log(state.frames)
    var framesLocal = state.frames.push(url)
    this.setState({
      flag: flag,
      frames: framesLocal,
    });
  }

  start = (state) => {
    window.intervalID = setInterval(() => {this.getFrame(state)}, 500);
  }

  stop = (state) => {
    window.clearInterval(window.intervalID);
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
      frames: this.state.frames
    });
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
        <div className="text-center">
        <Button variant="success" onClick={() => this.start(this.state)}>
          Start
        </Button>
        <Button variant="danger" onClick={() => this.stop(this.state)}>
          Stop
        </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
