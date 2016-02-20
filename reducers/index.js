import { combineReducers } from 'redux'
import count from './counter'

const gameApp = combineReducers(
        {
            count
        }
);

export default gameApp;
