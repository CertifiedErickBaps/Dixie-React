import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css";
import "./index.css";
import db from "./db";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import img from "./img/idea.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: []
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearchTodo = this.handleSearchTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  componentDidMount() {
    db.table("todos")
      .toArray()
      .then(todos => {
        this.setState({ todos });
      });
  }

  handleSearchTodo(id) {
    const newValue = parseInt(id, 10);
    db.table("todos")
      .get(newValue)
      .then(() => {
        const newList = [
          ...this.state.todos.filter(todo => todo.id === newValue)
        ];
        this.setState({ task: newList });
      });
  }

  handleAddTodo(title) {
    const todo = {
      title,
      done: false
    };
    db.table("todos")
      .add(todo)
      .then(id => {
        const newList = [...this.state.todos, Object.assign({}, todo, { id })];
        this.setState({ todos: newList });
      });
  }

  handleToggleTodo(id, done) {
    db.table("todos")
      .update(id, { done })
      .then(() => {
        const todoToUpdate = this.state.todos.find(todo => todo.id === id);
        const newList = [
          ...this.state.todos.filter(todo => todo.id !== id),
          Object.assign({}, todoToUpdate, { done })
        ];
        this.setState({ todos: newList });
      });
  }

  handleDeleteTodo(id) {
    db.table("todos")
      .delete(id)
      .then(() => {
        const newList = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: newList });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo Dexie</h2>
        </div>
        <div className="container">
          <div className="Card">
            <TodoSearch
              search={this.state.task}
              handleToggleTodo={this.handleToggleTodo}
              handleDeleteTodo={this.handleDeleteTodo}
            />
          </div>

          <div className="Card">
            <div className="card-header">
              <AddTodo
                handleAddTodo={this.handleAddTodo}
                handleSearchTodo={this.handleSearchTodo}
              />
            </div>
            {this.state.todos.length !== 0 && (
              <TodoList
                todos={this.state.todos}
                handleToggleTodo={this.handleToggleTodo}
                handleDeleteTodo={this.handleDeleteTodo}
              />
            )}
            {this.state.todos.length === 0 && (
              <div className="container">
                <img className="responsive-img" src={img} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
