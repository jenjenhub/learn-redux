2022.02.02 개인공부 - React Redux Tutorial

https://www.youtube.com/watch?v=CVpUuw9XSjY

💗 주석처리된 이 부분을 여러 파일로 나누어 처리하는 과정이다.
```js

// STORE -> Globalized State

// ACTION (describes what you wanna do = +1 and -1) : INCREMENT
// action returns an object with a type & payload
const increment = () => {
return {
type: "INCREMENT",
};
};
// name: 이라고 써도 무방

const decrement = () => {
return {
type: "DECREMENT",
};
};

// REDUCER does the work (that the ACTION describes)
const counter = (state = 0, action) => {
// let's say the state is 0 (the same as declaring 1 line above: let state = 0; and saying: const counter = (state, action) =>
switch (action.type) {
//we can switch the action depending on its type
case "INCREMENT":
// if our case is INCREMENT
return state + 1;
case "DECREMENT":
return state - 1;
}
};

let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH an action
store.dispatch(increment()); //1
store.dispatch(decrement()); //0
store.dispatch(decrement()); //-1

```
