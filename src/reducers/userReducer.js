import {
    GET_USER
} from '../actions/types';

const INITIAL_STATE = {
    userData:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_USER: {
            return {
                ...state,
                userData: action.payload,
            };
        }
        default:
            return state;
    }
}