export const SET_ALGORITHM = 'SET_ALGORITHM';
export const setAlgorithm = algorithm => {
    return {
        type: SET_ALGORITHM,
        algorithm
    };
};

export const SET_DATA_INPUT_METHOD = 'SET_DATA_INPUT_METHOD';
export const setDataInputMethod = inputMethod => {
    return {
        type: SET_DATA_INPUT_METHOD,
        inputMethod
    };
};
