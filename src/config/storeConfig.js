import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native'
import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['navigation'] // navigation will not be persisted
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}