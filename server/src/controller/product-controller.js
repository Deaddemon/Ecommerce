import Product from "../model/productsSchema.js";

export const getProducts = async (request , response)=>{
    try{
       const products =  await Product.find({});
       response.json(products);

    }catch(error){
        console.log('Error: ', error.message);
    }
}


export const getProductByid = async( req , res)=>{
    try{
        const product = await Product.findOne({'id': req.params.id});
        res.json(product);

    }catch(error){
        console.log("Error:", error.message);
    }
}