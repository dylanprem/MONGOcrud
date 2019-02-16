import React, { Component } from "react";
import axios from "axios";
import mongoPhoto from "../../img/mongo.jpg";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: this.props.match.params.id,
      errors: {},
      item: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getItemToUpdate();
  }

  getItemToUpdate = () => {
    axios
      .get(`https://merncrudd.herokuapp.com/GET/${this.state.editingId}`)
      .then(res => {
        const item = res.data;
        this.setState({ item, errors: {} });
        console.log(item);
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  updateItem = e => {
    e.preventDefault();
    const updatedItem = {
      item: this.item.value
    };

    axios
      .patch(
        `https://merncrudd.herokuapp.com/PATCH/${this.state.editingId}`,
        updatedItem
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ errors: {} });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    const editItem = (
      <form onSubmit={this.updateItem}>
        <div className="form-group">
          <input
            type="text"
            name="item"
            defaultValue={this.state.item.item}
            ref={item => (this.item = item)}
            onChange={this.handleChange}
            className={
              errors && errors.item
                ? "form-control form-control-lg is-invalid"
                : "form-control form-control-lg"
            }
          />
          <div className="invalid-feedback">{errors.item}</div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-success btn-block mt-3"
          />
        </div>
      </form>
    );
    return (
      <div className="container mt-5 mb-5">
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
          <div className="col-md-8 offset-md-2 mt-5">{editItem}</div>
        </div>
      </div>
    );
  }
}

export default EditItem;
