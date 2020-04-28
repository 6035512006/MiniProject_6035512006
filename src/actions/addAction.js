import {ADD_PRODUCT_BASKET} from './types'

export const addBasket = () =>{

    return(dispatch) =>{
        console.log("ADD to cart")
        dispatch({
            type: ADD_PRODUCT_BASKET
        });
    }



}