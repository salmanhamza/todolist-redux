import * as actiontypes from "../actions/constant";
export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actiontypes.ADDTODO:
      return [action.payload, ...state];
    case actiontypes.GETTODO:
      return action.payload;
    case actiontypes.TOGGLETODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actiontypes.UPDATETODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    default:
      return state;
  }
};
