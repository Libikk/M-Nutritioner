import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

import allReducers from './js/app/reducers/indexReducer';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
