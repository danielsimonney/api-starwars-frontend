import { combineReducers } from 'redux';
import typeReducer from './type/type.reducer';
import wookieReducer from './wookie/wookie.reducer';
import searchboxReducer from './searchbox/searchBox.reducer';



const rootReducer = combineReducers({
  categories: typeReducer,
  wookie: wookieReducer,
  searchBox: searchboxReducer
});

export default rootReducer;