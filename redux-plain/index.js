// import { combineReducers, createStore } from "redux"; // using es6 modules (see package.json)
const redux = require("redux");

// action-creator returns action
// actions is a plain JS object which carry some info from the app to the store
// it has a type property (which indicates the type of action being performed) and optional payload
const increment = (number = 1) => {
  return {
    type: "increment",
    payload: number,
  };
};
const decrement = (number = 1) => {
  return {
    type: "decrement",
    payload: number,
  };
};

const login = () => {
  return {
    type: "login",
  };
};

/**
 * reducers
 * reducers are pure JS functions which takes in current state and action as a arguments and returns a new state depending upon the action type
 */
const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;
    default:
      return state;
  }
};

const loginReducer = (state = false, { type }) => {
  switch (type) {
    case "login":
      return !state;
    default:
      return state;
  }
};

// store
// one place for all application state
// subscribe() , getState() , dispatch()
// subscribe(listener()) => this listener function gets called every time an action is dispatched
// const unsubscribe = subscribe(....) => subscribe method returns a function which when invoked unsubscribe's the application from the store
// createStore(rootReducer, preloadedState, middlewares)

const rootReducer = redux.combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

const store = redux.createStore(rootReducer, { counter: 100 });

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(increment(10));
store.dispatch(login());

store.dispatch(decrement(7));
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(login());
store.dispatch({ type: "increment", payload: 15 });

unsubscribe();
store.dispatch(increment(1000));
