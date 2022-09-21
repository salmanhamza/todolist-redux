import express from "express";
import { addTodo } from "../controllers/controllers.js";

const route = express.Router();

route.post("/todos", addTodo);

export default route;
