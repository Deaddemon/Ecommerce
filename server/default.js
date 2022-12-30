import { products } from "./src/constant/products.js";
import Product from "./src/model/productsSchema.js";


const DefaultData = async ()=>{
     


        try{
             
            await Product.deleteMany({});
            await  Product.insertMany(products);
           console.log('data imported succcessfully');

        }catch(error){
            console.log('error', error.message);
        }

    
}

export default DefaultData;