import express from 'express';


import { userSignup , userLogin } from '../controller/user-controller.js';
import { getProducts , getProductByid} from '../controller/product-controller.js';
const router = express.Router();


router.post('/signup',  userSignup);
router.post('/login' , userLogin) ;

//personal protected pages access
//router.post('/profile' , profile);

// //the call is not product specific call thats why it is a get call
// router.get('/products' , getProducts);
// //colon indicates id is a varible
// router.get('/product/:id' , getProductByid);


export default router;