import React, { Component } from "react";
import mongoPhoto from "../img/mongo.jpg";
import ListItems from "../components/child-components/ListItems";

class Landing extends Component {
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
        <div className="row mt-3">
          <ListItems />
        </div>
      </div>
    );
  }
}

export default Landing;
