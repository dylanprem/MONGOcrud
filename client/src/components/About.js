import React, { Component } from "react";
import Prism from "prismjs";
import "../css/prism.css";

class About extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <img
            src={mongoPhoto}
            className="img-fluid mx-auto d-block mongo-icon"
            alt="mongodb"
          />
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <h1 className="display-1 text-success text-center">
              MONGO<span className="text-muted">crud</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
