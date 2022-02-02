import React from "react";
import { useSelector, useDispatch } from "react-redux"; //index.js내용을 App.js로 연결해 불러오는 역할
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
      {isLogged ? <h3>Valuable info</h3> : ""}
    </div>
  );
}

//button onClick 부분은 ()=>dispatch(ACTION) 으로 실행되는데, action/index.js 에서 action의 내용을 처리한다

export default App;
