import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Landing from "./components/Landing";
import EditItem from "./components/child-components/EditItem";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/edit/:id" component={EditItem} />
        </div>
      </Router>
    );
  }
}

export default App;
