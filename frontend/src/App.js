import React from "react";
import "./App.css";
import Upload from "./components/Upload";

function App() {
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
          style={{ color: "white", paddingTop: "30vh" }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default App;
