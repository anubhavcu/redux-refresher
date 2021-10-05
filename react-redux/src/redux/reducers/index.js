import { combineReducers } from 'redux';
import { cakeReducer } from './cakeReducer';
import { counterReducer } from './counterReducer';
import { IceCreamReducer } from './iceCreamReducer';
import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  users: userReducer,
  cakes: cakeReducer,
  iceCreams: IceCreamReducer,
});
