import React from "react";
import { getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import TodoTabs from "./TodoTabs";

const Todos = () => {
  const dispatch = useDispatch();
  const todo = useSelector((State) => State.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <div>
        <TodoTabs />
      </div>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
