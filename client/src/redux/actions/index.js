import axios from "axios";
import {
  ADDTODO,
  GETTODO,
  TOGGLETODO,
  UPDATETODO,
  DELETETODO,
  TOGGLETABS,
} from "./constant";

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
    dispatch({ type: TOGGLETODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${URL}/todos/${id}`, { data });
    dispatch({ type: UPDATETODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URL}/todos/${id}`);
    dispatch({ type: DELETETODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLETABS, selected: tab });
};
