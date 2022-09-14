import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  todo: todosReducers,
});

const store = createStore(reducer);
