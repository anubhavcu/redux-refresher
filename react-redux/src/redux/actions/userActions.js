import axios from 'axios';
import {
  CLEAR_USERS,
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../constants/constants';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const userData = data.map((user) => {
      return { id: user.id, name: user.name };
    });

    dispatch({ type: FETCH_USER_SUCCESS, payload: userData });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAIL, payload: err });
  }
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS,
  };
};
