import { combineReducers } from 'redux'
import count from './counter'
import slot from './slot'

const gameApp = combineReducers(
        {
            count,
            slot
        }
);

export default gameApp;
