import {GET_USER} from './types'
import axios from 'axios'

export const getUserData = () => {
    return (dispatch, getState) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            dispatch({
                type: GET_USER,
                payload: response.data,
            })
        }).catch((error) => {
        })
    };
};
