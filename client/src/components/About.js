import React, { Component } from "react";
import Prism from "prismjs";
import "../css/prism.css";
import mongoPhoto from "../img/mongo.jpg";
import { Link } from "react-router-dom";
import { SNIPPET_ONE, SNIPPET_TWO } from "../components/code-snippets/Snippets";

class About extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row mt-3">
          <div className="col-md-12">
            <h3>
              <Link className="text-success" to="/">
                Home
              </Link>
            </h3>
          </div>
        </div>
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
          <div className="col-md-8 offset-md-2">
            <h1 className="text-success">What is MONGOcrud?</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <p className="text-muted">
              MONGOcrud is a simple CRUD application built with the MERN stack
              (MongoDB, Express, React, Node.js). It's simple and should
              hopefully shed some light building a full stack MERN app.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-dark">
              The backend <small className="text-muted">our API</small>
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <p className="text-muted">
              The goal here was to build a RESTful API with Express and MongoDB,
              where our Client side React app can GET information from, and also
              POST, PATCH {`(`}edit{`)`}, and DELETE information as well. I had
              also set up error handling on the server side which I eventually
              pass to the client side. With that being said, let's run through
              an entire GET requests from server-side to client-side. The code
              below shows a GET request to our MongoDB "items" database. It
              returns a JSON object with all of our items.
            </p>
          </div>
          <div className="col-md-8 offset-md-2">{SNIPPET_ONE}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-dark">
              The client <small className="text-muted">our React app</small>
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <p className="text-muted">
              In our React application{" "}
              <span className="text-info">ListItems</span> component, we'll call
              our
              <span className="text-warning">getItems</span> function inside of
              the componentDidMount life-cycle via Axios. We are also passing
              any potential server-side errors to our errors state if any exist.
              We pass res.data into our items state so that we can display the
              data in our DOM. The console will return our response and/or
              errors when the DOM is loaded.
            </p>
          </div>
          <div className="col-md-8 offset-md-2">{SNIPPET_TWO}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-warning">
              Summary
              <small className="text-muted"> and honorable mentions</small>
            </h1>
            <p className="text-muted">
              The POST, PATCH, and DELETE requests are pretty similar. Hope this
              helps you build your next MERN app.
            </p>
            <h3 className="text-info">Shout outs:</h3>
            <p className="text-muted">
              <strong>Postman</strong> for testing routes.
            </p>
            <p className="text-muted">
              <strong>Concurrently</strong> for simultaneously running our
              server and client.
            </p>
            <p className="text-muted">
              <strong>Axios</strong> for graceful API requests.
            </p>
            <p className="text-muted">
              <strong>Prism</strong> for adding beautiful code snippets to your
              projects.
            </p>
            <p className="text-muted">
              <strong>Bootstrap 4</strong> is super nice.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
