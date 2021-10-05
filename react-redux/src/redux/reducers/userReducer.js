import {
  CLEAR_USERS,
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../constants/constants';

const initialState = {
  userList: [],
  loading: false,
  error: '',
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { loading: true, userList: [], error: '' };
    case FETCH_USER_SUCCESS:
      return { loading: false, userList: action.payload, error: '' };
    case FETCH_USER_FAIL:
      return { loading: false, userList: [], error: action.payload };
    case CLEAR_USERS:
      return { ...state, loading: false, userList: [], error: '' };
    default:
      return state;
  }
};
