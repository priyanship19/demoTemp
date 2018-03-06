import { combineReducers } from 'redux';
import  AppNavigator  from '../navigation/index';
import UserReducer from './userReducer';

const AppReducer = combineReducers({
    navigation: (state, action) => (
        AppNavigator.router.getStateForAction(action, state)
    ),
    user: UserReducer,
});

export default AppReducer;

