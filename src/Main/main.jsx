import React, { Component } from "react";
import ToDoContainer from "../To-Do-Container/todocontainer";
import "./main.css";
class Main extends Component {
  render() {
    return (
      <main className="flex">
        {this.props.todos.map(todo => (
          <ToDoContainer
            key={todo._id}
            id={todo._id}
            description={todo.desc}
            onDelete={this.props.onDelete}
          />
        ))}
      </main>
    );
  }
}

export default Main;
