import {getProduct} from '../redux/product';

// actions creators.
const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId: productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId: productId
        }
    }
}

// reducer.
const initialState = {
    items: [],
    currency: 'RS'
}

//export default function cart(state = initialState, action = {}) {
export default function cart(state = initialState, action = {}) {
    switch(action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [...state.items, payload.productId]
    }
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        //items: [...state.items.filter((id) => id !== payload.productId)]
        items: state.items.filter((id) => id !== payload.productId)
    }
}

// selectors => To get or access the value of states only.
export function isInCart(state, props) { // Returns boolean value.
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state) {
    return state.cart.items.map((id) => getProduct(state, {id: id}));
}

export function getCurrency(state) {
    return state.cart.currency;
}

export function getTotal(state) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, {id: id});
        return acc + item.price;
    }, 0);
}
