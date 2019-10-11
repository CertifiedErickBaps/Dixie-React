import React from "react";
import { PropTypes } from "prop-types";
import "./Todo.css";

const Todo = ({ title, id, done, handleToggleTodo, handleDeleteTodo }) => (
  <li class="list-group-item justify-content-around">
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={e => handleToggleTodo(id, !done)}
      />
    </div>
    <div>
      <span>{title}</span>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-danger float-right"
        onClick={() => handleDeleteTodo(id)}
      >
        Delete
      </button>
    </div>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  handleToggleTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
};

export default Todo;
