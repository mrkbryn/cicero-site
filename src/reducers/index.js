import { combineReducers } from 'redux';
import {
    SET_ALGORITHM,
    SET_DATA_INPUT_METHOD,
    SET_MAX_ALLOWABLE_CONTEXT_SIZE,
    SET_MAX_ALLOWABLE_NUMERICAL_DOMAIN_WIDTH,
    SET_MAX_ALLOWABLE_CATEGORICAL_DOMAIN_SIZE,
    SET_TIMEOUT,
    SET_EPSILON,
} from '../actions';

const algorithm = (state = 'naive', action) => {
    switch (action.type) {
        case SET_ALGORITHM:
            return action.algorithm;
        default:
            return state;
    }
};

const maxAllowableContextSize = (state = 2, action) => {
    switch (action.type) {
        case SET_MAX_ALLOWABLE_CONTEXT_SIZE:
            return action.mS;
        default:
            return state;
    }
};

const maxAllowableNumericalDomainWidth = (state = 2.0, action) => {
    switch (action.type) {
        case SET_MAX_ALLOWABLE_NUMERICAL_DOMAIN_WIDTH:
            return action.mW;
        default:
            return state;
    }
};

const maxAllowableCategoricalDomainSize = (state = 2, action) => {
    switch (action.type) {
        case SET_MAX_ALLOWABLE_CATEGORICAL_DOMAIN_SIZE:
            return action.mC;
        default:
            return state;
    }
};

const timeout = (state = 120, action) => {
    switch (action.type) {
        case SET_TIMEOUT:
            return action.timeout;
        default:
            return state;
    }
};

const epsilon = (state = 0.1, action) => {
    switch (action.type) {
        case SET_EPSILON:
            return action.epsilon;
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
    maxAllowableContextSize,
    maxAllowableNumericalDomainWidth,
    maxAllowableCategoricalDomainSize,
    timeout,
    epsilon,
    dataInputMethod,
});

export default ciceroSite;
