import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
import MainView from './screens/MainView'

export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <MainView />
      </Provider>
    );
  }
}