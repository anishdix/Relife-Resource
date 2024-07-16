import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userRedux';
import cartReducer from './cartRedux';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;