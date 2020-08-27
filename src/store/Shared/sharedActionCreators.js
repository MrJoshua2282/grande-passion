import * as actionCreators from '../globalTypes';

export const removeItem = (id) => {
    return {
        type: actionCreators.REMOVE_ITEM,
        id
    }
}

export const addItem = (obj) => {
    return {
        type: actionCreators.ADD_ITEM,
        obj
    }
}

export const deleteItemSelected = (unique) => {
    return {
        type: actionCreators.DELETE_ITEM_SELECTED,
        unique
    }
}