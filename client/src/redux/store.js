import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducers } from "./reducers/todosReducers";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  todos: todosReducers,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
