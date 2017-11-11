import fetch from 'isomorphic-fetch'

export const SET_ALGORITHM = 'SET_ALGORITHM'
export const setAlgorithm = algorithm => {
    return {
        type: SET_ALGORITHM,
        algorithm
    }
}

export const SET_DATA_INPUT_METHOD = 'SET_DATA_INPUT_METHOD'
export const setDataInputMethod = inputMethod => {
    return {
        type: SET_DATA_INPUT_METHOD,
        inputMethod
    }
}

export const SET_MAX_ALLOWABLE_CONTEXT_SIZE = 'SET_MAX_ALLOWABLE_CONTEXT_SIZE'
export const setMaxAllowableContextSize = mS => {
    return {
        type: SET_MAX_ALLOWABLE_CONTEXT_SIZE,
        mS
    }
}

export const SET_MAX_ALLOWABLE_NUMERICAL_DOMAIN_WIDTH = 'SET_MAX_ALLOWABLE_NUMERICAL_DOMAIN_WIDTH'
export const setMaxAllowableNumericalDomainWidth = mW => {
    return {
        type: SET_MAX_ALLOWABLE_NUMERICAL_DOMAIN_WIDTH,
        mW
    }
}

export const SET_MAX_ALLOWABLE_CATEGORICAL_DOMAIN_SIZE = 'SET_MAX_ALLOWABLE_CATEGORICAL_DOMAIN_SIZE'
export const setMaxAllowableCategoricalDomainSize = mC => {
    return {
        type: SET_MAX_ALLOWABLE_CATEGORICAL_DOMAIN_SIZE,
        mC
    }
}

export const SET_EPSILON = 'SET_EPSILON'
export const setEpsilon = epsilon => {
    return {
        type: SET_EPSILON,
        epsilon
    }
}

/**
 * Dispatches actions as API call progresses
 */
export const fetchTestResult = (testInstance) => {
    return dispatch => {
        dispatch(requestTestResult(testInstance))
        // TODO: fetch from database when implemented
        // return fetch(`https://www.api.com/test`)
        //     .then(response => response.json())
        //     .then(json => dispatch(receiveTestResult(json)))
        dispatch(receiveTestResult({}))
    }
}

export const REQUEST_TEST_RESULT = 'REQUEST_TEST_RESULT'
export const requestTestResult = (testInstance) => {
    return {
        type: REQUEST_TEST_RESULT,
        testInstance
    }
}

export const RECEIVE_TEST_RESULT = 'RECEIVE_TEST_RESULT'
export const receiveTestResult = (testResult) => {
    return {
        type: RECEIVE_TEST_RESULT,
        testResult
    }
}
