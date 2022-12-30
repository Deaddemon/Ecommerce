
import * as actionType  from "../constants/productConstant.js"

export const getProductsReducer = ( state = {products:[]} , action )=>{
    //here the action is the whole object inside the dispatch
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS :
            return { products : action.payload}
        
            
        case actionType.GET_PRODUCT_FAILURE:
            return {error : action.payload}


        default:
            return state
    }
}

export const getProductDetailReducer = ( state ={ product: {}}, action) =>{
    switch(action.type){
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { product: action.payload}
        case actionType.GET_PRODUCT_DETAIL_FAILURE:
            return { error: action.payload}

        default:
            return state;

    }
}