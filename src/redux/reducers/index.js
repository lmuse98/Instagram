import { combineReducers } from 'redux';
import users from './users';

let reducers = {
    users
}

const allReducers = combineReducers(reducers);

export default allReducers;