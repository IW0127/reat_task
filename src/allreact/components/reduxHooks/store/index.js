import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  } else if (action.type === "ADD_BY_10") {
    return { counter: state.counter + action.payload };
  }
  return state;
};
const store = createStore(reducerFn);
export default store;
