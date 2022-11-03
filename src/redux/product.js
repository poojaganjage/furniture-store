import data from "../data/products";
export default function products(state = data) {
    console.log(state);
    console.log(data);
    return state;
}

export function getProducts(state) { // Get Multiple Products.
    console.log(state.product);
    return state.product;
}

export function getProduct(state, props) { // Get Single Product.
    return state.product.find((item) => item.id === props.id); // find method to find or search an individual product exists or not.
}
