import express from "express";
import { adminMiddlware, requireLogin, userMiddlware } from "../common-middleware/index.js";
import { createCategory, getCategories } from "../controller/category-controller.js";

 
const router = express.Router();

//router.post('/category/create' ,   createCategory);
router.post('/category/create' , requireLogin , adminMiddlware, createCategory);

router.get('/category/getCategories' , requireLogin, userMiddlware, getCategories);

export default router;