import { combineReducers } from 'redux'
import count from './counter'
import slot from './slot'
import turn from './turn'

const gameApp = combineReducers(
        {
            count,
            slot,
            turn
        }
);

export default gameApp;
