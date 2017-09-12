import { combineReducers } from 'redux';
import {
    SET_ALGORITHM,
    SET_DATA_INPUT_METHOD,
} from '../actions';

const algorithm = (state = 'naive', action) => {
    switch (action.type) {
        case SET_ALGORITHM:
            return action.algorithm;
        default:
            return state;
    }
};

const dataInputMethod = (state = 'sqlQuery', action) => {
    switch (action.type) {
        case SET_DATA_INPUT_METHOD:
            return action.inputMethod;
        default:
            return state;
    }
};

const ciceroSite = combineReducers({
    algorithm,
    dataInputMethod,
});

export default ciceroSite;
