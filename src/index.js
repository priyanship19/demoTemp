
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import SimpleApp from './navigation'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import configureStore from './config/storeConfig'
let { store, persistor } = configureStore()

console.disableYellowBox = true
export default class App extends Component<{}> {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SimpleApp/>
                </PersistGate>
            </Provider>
        );
    }
}

