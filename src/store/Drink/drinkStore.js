const initialState = {
    drinks: [
        {}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SOMETHING':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;