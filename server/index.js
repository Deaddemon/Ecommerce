import express from 'express'; 
//import cors from 'cors';
 
import dotenv from 'dotenv';


import Connection from './src/database/db.js';
//import DefaultData from './default.js';
import userRoutes from './src/routes/user/auth.js';
import adminRoutes from './src/routes/admin/auth.js';
import categoryRoutes from './src/routes/category.js';
import productRoutes from './src/routes/product.js';

dotenv.config();

 const app=  express();
 const PORT = 8000;


 //middleware to pass the data 
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
// app.use(cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use('/', userRoutes);
app.use('/', adminRoutes);
app.use('/' , categoryRoutes);
app.use('/' , productRoutes);
 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

Connection(username , password , database);


   

app.listen(PORT , ()=> {
    console.log(`the server is running at ${PORT}`);
})


// DefaultData();