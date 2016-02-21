import { combineReducers } from 'redux'
import slot from './slot'
import turn from './turn'

const gameApp = combineReducers(
        {
            slot,
            turn
        }
);

export default gameApp;
