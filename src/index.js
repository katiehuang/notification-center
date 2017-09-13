import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import notificationSaga from './notificationCenter/sagas';
import reducer from './notificationCenter/reducer';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const initialState = { initialState: [] };
const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, initialState, enhancer);
sagaMiddleware.run(notificationSaga);

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
