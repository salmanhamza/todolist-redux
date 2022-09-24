import axios from "axios";
import { ADDTODO, GETTODO } from "./constant";

const URL = "http://localhost:8000";

export const addTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/todos`, { data });

    dispatch({ type: ADDTODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/todos`);
    dispatch({ type: GETTODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/todos/${id}`);
    dispatch({ type: GETTODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
