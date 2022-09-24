import * as actiontypes from "../actions/constant";
export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actiontypes.ADDTODO:
      return [action.payload, ...state];
    case actiontypes.GETTODO:
      return action.payload;

    default:
      return state;
  }
};
