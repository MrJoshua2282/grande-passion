import * as actionTypes from '../globalTypes';

const initialState = {
    typeOfBread: {},
    isToasted: false,
    breadDetails: [
        { id: '1f', name: 'Sandwich', price: 1.5, flourType: ['White', 'Whole Wheat'] },
        { id: '2f', name: 'Bagel', price: 1.5, flourType: ['White', 'Whole Wheat', 'Everything', 'Garlic N Onion'] },
        { id: '3f', name: 'Half-Sub', price: 2, flourType: ['White', 'Whole Wheat'] },
        { id: '4f', name: 'Full-Sub', price: 3.25, flourType: ['White', 'Whole Wheat'] },
    ],
    toppings: [
        { id: '10f', name: 'American Cheese', price: .25 },
        { id: '11f', name: 'Swiss Cheese', price: .25 },
        { id: '12f', name: 'Mozzarella', price: .25 },
        { id: '13f', name: 'Cheddar Cheese', price: .25 },
        { id: '15f', name: 'Pickles', price: .75 },
        { id: '16f', name: 'Tomato', price: .75 },
        { id: '17f', name: 'Jalapeno', price: .75 },
        { id: '18f', name: 'Onions', price: .75 },
        { id: '19f', name: 'Lettuce', price: .75 },
        { id: '20f', name: 'Tuna Salad', price: .75 },
        { id: '21f', name: 'Chicken Salad', price: .75 },
        { id: '22f', name: 'Egg Salad', price: .75 },
        { id: '23f', name: 'Vegan Meatballs', price: 2 },
        { id: '24f', name: 'Meatballs', price: 2 },
        { id: '25f', name: 'Hot Ham', price: 2 },
        { id: '26f', name: 'Turkey', price: 2 },
        { id: '27f', name: 'Chicken', price: 2 },
        { id: '28f', name: 'Sausage', price: 2 },
    ],
    condiments: [
        { id: '50f', name: 'Vinegar', included: false },
        { id: '51f', name: 'Olive Oil', included: false },
        { id: '52f', name: 'Mayo', included: false },
        { id: '53f', name: 'Mustard', included: false },
        { id: '54f', name: 'Ketchup', included: false },
        { id: '55f', name: 'Spicey Buffalo Sauce', included: false },
        { id: '56f', name: 'Peanut Butter', included: false },
        { id: '57f', name: 'Grape Jelly', included: false },
        { id: '58f', name: 'Butter', included: false },
        { id: '59f', name: 'Cream Cheese', included: false },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_IS_TOASTED:
            return {
                ...state,
                isToasted: !state.isToasted
            };
        case actionTypes.SET_BREAD_TYPE:
            return {
                ...state,
                typeOfBread: action.breadObj
            };
        default:
            return state;
    }
}

export default reducer;