import React from "react";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./utils/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
