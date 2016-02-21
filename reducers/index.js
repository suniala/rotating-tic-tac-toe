import { combineReducers } from 'redux'
import { slots } from './slots'
import turn from './turn'

const gameApp = combineReducers(
        {
            slots,
            turn
        }
);

export default gameApp;
