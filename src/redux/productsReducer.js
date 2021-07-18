import {GET_PRODUCT, GET_PRODUCTS, RESET_PRODUCT} from "./actionsTypes";

const initialState = {
    products: [],
    productsLoaded: false,

    product:{},
    productLoaded: false

};
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {  // return new object
                ...state, // return all the state as it is but overwrite only part of state in products
                products: action.data,
                productsLoaded: true
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.data,
                productLoaded: true
            }
        case RESET_PRODUCT:
            return {
                ...state,
                product: {},
                productLoaded: false
            }
        default:
            return state;
    }
}
export default productsReducer

