import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import allReducers from './js/app/reducers/indexReducer';

const store = createStore(allReducers);
export default store;

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);