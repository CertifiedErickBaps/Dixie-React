import React, { Component } from "react";
import { PropTypes } from "prop-types";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = { 
      value: ""
   };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  addTodo() {
    this.props.handleAddTodo(this.state.value);
    this.resetInput();

  }

  handleChangeButton = event => {
    this.setState({
      name: event.target.value
    })
  }
  resetInput = () => {
    this.setState({value: ""});
  }

  handleChange(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value={this.state.value}
          onChange={e => this.handleChange(e.target.value)}
          placeholder="Add a task..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <div class="input-group-btn">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={this.addTodo}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
};

export default AddTodo;