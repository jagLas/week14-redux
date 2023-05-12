const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const SUBTRACT_FROM_CART = 'cart/SUBTRACT_FROM_CART';
const SET_CART_QTY = 'cart/SET_CART_QTY';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const subtractFromCart = (id) => {
    return {
        type: SUBTRACT_FROM_CART,
        id
    }
}

export const setCartQty = (id, qty) => {
    return {
        type: SET_CART_QTY,
        payload: {id, qty}
    }
}

function cartReducer (state={}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const cartItem = state[action.id];
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
        }
        case REMOVE_FROM_CART:{
            const newState = {...state};
            delete newState[action.id];
            return newState;
        }
        case SUBTRACT_FROM_CART: {
            const newState = {
                ...state,
            }

            const cartItem = state[action.id];
            const count = cartItem.count - 1;

            if (count === 0 ) {
                delete newState[action.id]
                return newState;
            }

            const newKey = {
                id: action.id,
                count
            };

            newState[action.id] = newKey;
            return newState;
        }
        case SET_CART_QTY: {
            const newState = {...state}
            newState[action.payload.id].count = action.payload.qty;
            if (action.payload.qty <= 0) {
                delete newState[action.payload.id]
            }
            return newState;
        }
        default:
            return state;
    };
};

export const getAllCartItems = (state) => {
    let cartItems = Object.values(state.cart);
    cartItems = cartItems.map(item => {
        return {
            ...item,
            ...state.produce[item.id]
        }
    })

    return cartItems;
}

export default cartReducer;