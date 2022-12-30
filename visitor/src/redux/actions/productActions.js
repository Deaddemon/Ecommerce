import axios from "axios";
import * as action from '../constants/productConstant.js'


const url =  'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
       const {data} =  axios.get(`${url}/products`);
       //dispatch will always call reducer
       // reducer will have  a switch case
        dispatch({type:  action.GET_PRODUCT_SUCCESS  , payload:data })

    } catch(error) {
        dispatch({type:  action.GET_PRODUCT_FAILURE , payload: error.response })
        // console.log("Error while calling products api");
    }
}


export const getProductDetail = (id) => async (dispatch) =>{
    try{

        const {data} = await axios.get(`${url}/product/${id}`);

        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS , payload: data});

    }catch(error){

        dispatch({type: action.GET_PRODUCT_DETAIL_FAILURE , payload: error.response});

    }
}
