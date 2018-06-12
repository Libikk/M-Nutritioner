import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './js/app/reducers/indexReducer';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
export default store;

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);