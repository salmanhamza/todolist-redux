import React from "react";
import { deleteTodo, getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import TodoTabs from "./TodoTabs";
import { ACTIVETODOS, ALLTODOS, DONETODOS } from "../redux/actions/constant";

const Todos = () => {
  const dispatch = useDispatch();
  const todo = useSelector((State) => State.todos);
  const currentTab = useSelector((State) => State.currenttab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALLTODOS) {
      return todo;
    } else if (currentTab === ACTIVETODOS) {
      return todo.filter((todo) => !todo.done);
    } else if (currentTab === DONETODOS) {
      return todo.filter((todo) => todo.done);
    }
  };

  const removeDoneTodo = () => {
    todo.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article>
      <div>
        <TodoTabs currentTab={currentTab} />
        {todo.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodo} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
