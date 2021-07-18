import {GET_PRODUCTS,GET_PRODUCT,RESET_PRODUCT} from "./actionsTypes";
import axios from "axios";
// ActionCreatorThunk
export const getProductsAction = ()=> {
    return async function (dispatch) {
        const response = await axios
            .get("https://fakestoreapi.com/products")
        return dispatch ({
            type: GET_PRODUCTS,
            data: response.data
        })
    }
}
export const getProductAction = (id)=> {
    return async function (dispatch) {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
        return dispatch ({
            type: GET_PRODUCT,
            data: response.data
        })
    }
}
export const resetProductsAction = () => {
    return {
        type: RESET_PRODUCT
    }
}