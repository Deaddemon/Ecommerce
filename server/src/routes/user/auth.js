import express from 'express';
 
import { userSignup , userLogin } from '../../controller/user/user-controller.js'
//'../../controller/user-controller.js';
import { validateSignUpRequest, isSignUpRequestValidated } from '../../validator/auth.js';
import { validateLogInRequest , isLogInRequestValidated } from '../../validator/auth.js';
 
const router = express.Router();


router.post('/signup' ,  validateSignUpRequest , isSignUpRequestValidated,  userSignup);

//router.post('/login' , userLogin) ;
  
router.post('/login' ,validateLogInRequest  , isLogInRequestValidated , userLogin) ;
  


//protected pages/routes access
//router.post('/profile' , profile);

// //the call is not product specific call thats why it is a get call
// router.get('/products' , getProducts);
// //colon indicates id is a varible
// router.get('/product/:id' , getProductByid);


export default router;