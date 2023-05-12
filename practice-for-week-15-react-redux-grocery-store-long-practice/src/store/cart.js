const ADD_TO_CART = 'cart/ADD_TO_CART'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

function cartReducer (state={}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const cartItem = state[action.id];
            // debugger
            let count;
            if (cartItem) {
                count = cartItem.count + 1;
            } else {
                count = 1;
            }
            const newKey = {
                id: action.id,
                count
            };
            const newState = {
                ...state,
            }
            newState[action.id] = newKey;
            return newState;
        default:
            return state;
    };
};

export default cartReducer;