import React, {Component} from "react";
import {PropTypes} from "prop-types";

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            valueSearch: ""
        };
        this.addTodo = this.addTodo.bind(this);
        this.searchTodo = this.searchTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    addTodo() {
        this.props.handleAddTodo(this.state.value);
        this.resetInput();
    }

    searchTodo() {
        this.props.handleSearchTodo(this.state.valueSearch);
        this.resetInput();
    }

    resetInput = () => {
        this.setState({
            value: "",
            valueSearch: ""
        });
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={this.state.valueSearch}
                        name="valueSearch"
                        onChange={e => this.handleChange(e)}
                        placeholder="Search a task by id..."
                        aria-describedby="basic-addon2"
                    />

                    <div className="input-group-btn">
                        {this.state.valueSearch === "" && (
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                disabled
                            >
                                Search
                            </button>
                        )}
                        {this.state.valueSearch !== "" && (
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTodo}
                            >
                                Search
                            </button>
                        )}
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="value"
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}
                        placeholder="Add a task..."
                        aria-describedby="basic-addon2"
                    />

                    <div className="input-group-btn">
                        {this.state.value === "" && (
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                disabled
                            >
                                Add
                            </button>
                        )}
                        {this.state.value !== "" && (
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.addTodo}
                            >
                                Add
                            </button>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

AddTodo.propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
    handleSearchTodo: PropTypes.func.isRequired
};

export default AddTodo;
