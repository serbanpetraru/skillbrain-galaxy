import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = ({ id, title, description, completed, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`todo-item ${completed ? "todo-completed" : ""}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={completed} onChange={onToggle} />

          <h4>{title}</h4>
        </div>

        <div className="icons">
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={onEdit}
          ></i>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={onDelete}
          ></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{description}</p>
    </div>
  );
};

export default TodoItem;