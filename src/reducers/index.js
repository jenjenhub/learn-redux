import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});
// counterReducer를 counter라는 이름으로 쓰고 loggedReducer를 isLogged라는 이름으로 쓰겠다는 것이다.

export default allReducers;
