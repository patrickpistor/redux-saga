import React, { Component } from 'react';

import { reducer } from "./src/state/reducer";
import { watcherSaga, GIFSaga } from "./src/state/sagas";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import StackNavigator from './src/navigation/TabNavigator';

const sagaMiddleware = createSagaMiddleware();

// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(GIFSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
