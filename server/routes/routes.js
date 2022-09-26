import express from "express";
import {
  addTodo,
  getAllTodos,
  toggleTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/controllers.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodo);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
