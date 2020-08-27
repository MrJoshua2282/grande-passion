import * as actionTypes from '../globalTypes';

export const toggleIsToasted = () => {
    return {
        type: actionTypes.TOGGLE_IS_TOASTED
    }
}

export const setBreadType = (breadObj) => {
    return {
        type: actionTypes.SET_BREAD_TYPE,
        breadObj
    }
}