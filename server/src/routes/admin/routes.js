import express from 'express';


import { userSignup , userLogin } from '../../controller/admin/user-controller.js';
const router = express.Router();


router.post('/admin/signup',  userSignup);
router.post('/admin/login' , userLogin) ;
 

export default router;