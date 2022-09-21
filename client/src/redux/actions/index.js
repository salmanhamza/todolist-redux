import axios from "axios";
import { ADDTODO } from "./constant";

const URL = "http://localhost:8000";

export const addTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/todos`, { data });

    dispatch({ type: ADDTODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
