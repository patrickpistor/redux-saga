import React, { Component } from 'react';
import { quoteSaga } from "./src/state/sagas/quote/getQuote.saga";
import { gifSaga } from "./src/state/sagas/gif/getGif.saga";
import { configureStore, sagaMiddleware} from './src/state/configureStore';
import { Provider } from "react-redux";
import StackNavigator from './src/navigation/TabNavigator';

const store = configureStore();
sagaMiddleware.run(quoteSaga, gifSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
