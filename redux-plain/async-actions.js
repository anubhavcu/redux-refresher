const redux = require("redux");
const reduxLogger = require("redux-logger");
const reduxThunk = require("redux-thunk");
const axios = require("axios");

const thunk = reduxThunk.default;
const logger = reduxLogger.createLogger();

const USER_FETCH_REQUEST = "USER_FETCH_REQUEST";
const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
const USER_FETCH_FAIL = "USER_FETCH_FAIL";

const fetchUsers = () => async (dispatch) => {
  dispatch({ type: USER_FETCH_REQUEST });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = data.map((user) => {
      return { id: user.id, name: user.name };
    });

    dispatch({ type: USER_FETCH_SUCCESS, payload: userData });
  } catch (err) {
    dispatch({ type: USER_FETCH_FAIL, payload: err });
  }
};

const initialState = {
  users: [],
  loading: false,
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case USER_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const middlewares = [thunk, logger];

const store = redux.createStore(
  userReducer,
  redux.applyMiddleware(...middlewares)
);

store.dispatch(fetchUsers());
