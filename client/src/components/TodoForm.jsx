import React from "react";
import { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const Handler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  const TodoInput = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <form className="form" onSubmit={Handler}>
      <input
        placeholder="Enter new tasks..."
        className="input"
        onChange={TodoInput}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
