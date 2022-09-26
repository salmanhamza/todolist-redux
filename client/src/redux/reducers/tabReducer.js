import * as actionTypes from "../actions/constant";

export const tabReducer = (state = actionTypes.ALLTODOS, action) => {
  switch (action.type) {
    case actionTypes.TOGGLETABS:
      return action.selected;

    default:
      return state;
  }
};
