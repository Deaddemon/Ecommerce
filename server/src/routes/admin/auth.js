import express from 'express';


import { userSignup , userLogin } from '../../controller/admin/user-controller.js';
import { validateSignUpRequest , isSignUpRequestValidated } from '../../validator/auth.js';
import { validateLogInRequest  , isLogInRequestValidated } from '../../validator/auth.js';
const router = express.Router();


router.post('/admin/signup',   validateSignUpRequest , isSignUpRequestValidated, userSignup);
router.post('/admin/login' , validateLogInRequest  , isLogInRequestValidated ,userLogin) ;
 

export default router;