import * as actionTypes from '../globalTypes';
//import * as actionCreators from '../globalCreators';

export const updateCurrentOrderPrice = (priceOfBread) => {
    return {
        type: actionTypes.UPDATE_CURRENT_ORDER_PRICE,
        priceOfBread
    }
}

export const removeItem = (id, priceOfBread) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id,

    }
}

export const addItem = (obj, priceOfBread) => {
    return {
        type: actionTypes.ADD_ITEM,
        obj
    }
    updateCurrentOrderPrice(priceOfBread)
}

export const deleteItemSelected = (unique, priceOfBread) => {
    return {
        type: actionTypes.DELETE_ITEM_SELECTED,
        unique
    }
    updateCurrentOrderPrice(priceOfBread)
}

