import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux"; //connects our store to our entire App below.

// createStore 인자로 reducer 1개 이상 들어올 수 없다. 즉, const store = createStore (counter, isLogged) 는 불가하므로 combineReducer라는 걸 사용해서 두개의 reducer를 합치고 (reducers/index.js), 그 결과를 allReducer라는 변수로 선언하여 이 파일로 불러온다.
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 💗 주석처리된 이 부분을 여러 파일로 나누어 처리하는 과정이다. 이 부분은 README에서 자세히 볼 것.
// // STORE -> Globalized State

// // ACTION (describes what you wanna do = +1 and -1) : INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
//   {
//     /* name: 이라고 써도 무방 */
//   }
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };
// // REDUCER does the work (that the ACTION describes)
// const counter = (state = 0, action) => {
//   {
//     /* let's say the state is 0 (the same as declaring 1 line above: let state = 0; and saying: const counter = (state, action) => */
//   }
//   {
//     /* we can switch the action depending on its type */
//   }
//   {
//     /* if our case is INCREMENT */
//   }
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH an action
// store.dispatch(increment()); //1
// store.dispatch(decrement()); //0
// store.dispatch(decrement()); //-1

// This part is to link Redux with React
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
