import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

const allReducers = combineReducers({
  searchData: mainReducer,
});

export default allReducers;
