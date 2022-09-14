import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const Handler = (e) => {
    e.preventDefault();
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
      />
    </form>
  );
};

export default TodoForm;
