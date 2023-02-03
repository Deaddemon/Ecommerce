import express from 'express';
import multer from 'multer';
import shortid from 'shortid';
import path from "path"
const __dirname = path.resolve();

import { requireLogin,  adminMiddlware } from '../common-middleware/index.js';
import { createProduct } from '../controller/product-controller.js';

const router = express.Router();
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null , path.join(__dirname , 'uploads') )
    },
      
    filename: function(req, file , cb){
        cb(null , shortid.generate() +'-' + Date.now() +'-'+ 'productPicture'+'-'+ file.originalname)
    }
});
const upload = multer({storage});
router.post('/product/create' , requireLogin , adminMiddlware, upload.array('productPicture') ,createProduct );


export default router;