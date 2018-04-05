import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './Containers/App';
import './index.css';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { searchReducer } from './reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';


const logger = createLogger();

const store = createStore(searchReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
