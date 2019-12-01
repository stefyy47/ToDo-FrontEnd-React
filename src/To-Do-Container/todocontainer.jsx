import React from "react";
import "./todocontainer.css";
const ToDoContainer = props => {
  return (
    <section className="todo-container">
      <div className="todo-wrapper flex">
        <div className="flex">
          <span>{props.description}</span>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <button
            onClick={() => props.onDelete(props.id)}
            className="DeleteButton"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToDoContainer;
