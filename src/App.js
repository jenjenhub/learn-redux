import React from "react";
import { useSelector, useDispatch } from "react-redux";
//useSelector : connect함수를 이용하지 않고 리덕스의 state를 조회할 수 있다. (useSelector를 사용하면 reducer들이 담긴 reducers/index.js내용을 App.js로 연결해 불러올 수 있다)
//useDispatch : 생성한 action을 useDispatch를 통해 발생시킬 수 있다.
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

//button onClick 부분은 ()=>dispatch(ACTION) 으로 실행되는데, action/index.js 에서 action의 내용을 처리한다.

export default App;
