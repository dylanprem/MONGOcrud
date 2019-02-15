import React, { Component } from "react";
import axios from "axios";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      errors: {},
      deleting: false,
      posting: false,
      item: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.postItem = this.postItem.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios
      .get(`http://localhost:5000/api/GET`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const items = res.data;
        this.setState({
          items,
          errors: {},
          deleting: false,
          posting: false,
          item: ""
        });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

  postItem = e => {
    e.preventDefault();
    this.setState({ posting: true });
    const newItem = {
      item: this.state.item
    };
    axios
      .post(`http://localhost:5000/api/POST`, newItem)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getItems();
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  deleteItem = id => {
    this.setState({ deleting: true });
    axios
      .delete(`http://localhost:5000/api/DELETE/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getItems();
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    const { items, errors, posting, deleting } = this.state;
    let listItems;
    if (!isEmpty(items)) {
      listItems = items.map(i => (
        <tr key={i._id}>
          <td className={deleting === true ? "text-danger" : "text-muted"}>
            {i.item}
          </td>
          <td>
            <button
              className={
                deleting === true ? "btn btn-danger" : "btn btn-secondary"
              }
              onClick={this.deleteItem.bind(this, i._id)}
            >
              <i className="fas fa-trash-alt" /> delete
            </button>
          </td>
          <td>
            <Link to={`edit/${i._id}`} className="btn btn-success">
              <i className="far fa-edit" /> edit
            </Link>
          </td>
        </tr>
      ));
    } else {
      listItems = (
        <tr>
          <td>
            <small className="text-danger">{errors && errors.noitems}</small>
          </td>
        </tr>
      );
    }

    const addItem = (
      <form onSubmit={this.postItem}>
        <div className="form-group">
          <input
            type="text"
            name="item"
            value={this.state.item}
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
            className={
              posting === true
                ? "btn btn-lg btn-block btn-success mt-3"
                : "btn btn-lg btn-block btn-secondary mt-3"
            }
          />
        </div>
      </form>
    );

    return (
      <div className="col-md-8 offset-md-2 mt-5">
        {addItem}
        <h1 className="text-success text-center">Items</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Item</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}

export default ListItems;
