import { combineReducers } from 'redux';
import foods from './foods';

const rootReducer = combineReducers({
  foods: foods,
});

export default rootReducer;