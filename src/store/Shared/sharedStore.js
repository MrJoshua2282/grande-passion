import * as actionTypes from '../globalTypes';

const initialState = {
    currentOrder: [],
    priceOfCurrentOrder: 0,
    allOrders: [],
    priceOfAllOrders: 0,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_ITEM:
            const item = state.currentOrder.find(el => el.id === action.id);
            if (!item) return { ...state }
            const copy = state.currentOrder.filter(el => el.unique !== item.unique);
            return {
                ...state,
                currentOrder: copy
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                currentOrder: [{ ...action.obj, unique: Math.random() }, ...state.currentOrder]
            };
        case actionTypes.DELETE_ITEM_SELECTED:
            return {
                ...state,
                currentOrder: state.currentOrder.filter(el => el.unique !== action.unique)
            };
        case actionTypes.UPDATE_CURRENT_ORDER_PRICE:
            let curPrice = action.priceOfBread || 0;
            let reducedCost = state.currentOrder.reduce((acc, cur) => acc += cur.price, curPrice);
            return {
                ...state,
                priceOfCurrentOrder: reducedCost
            }
        default:
            return state;
    }
}

export default reducer;