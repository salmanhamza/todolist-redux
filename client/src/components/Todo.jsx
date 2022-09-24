import React from "react";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  return (
    <li className="task" onClick={() => toggleTodo()}>
      <span>{todo.data}</span>
      <span className="icon">
        <i className="fas fa-trash" />
      </span>
      <span className="icon">
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
