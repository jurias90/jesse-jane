import { createStore, combineReducers } from "redux";
import { userReducer as user } from "./ducks/user";

const reducers = combineReducers({
  user
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
