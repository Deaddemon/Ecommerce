import slugify from 'slugify';


import Product from "../model/productsSchema.js";

export const createProduct = (req, res) => {
    // res.status(200).json({
    //     file: req.files,
    //     body: req.body
    // });

    const { name, price, description,  category, createdBy } = req.body;

    let pictures = [];
    if(req.files.length > 0){
        pictures = req.files.map( file => {
            return { img : file.filename};
        });
    }
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description ,
        pictures ,
        category ,
        createdBy: req.user._id,
    });

    product.save(
        (error , product) => {
            if(error) return res.status(400).json({error});
            if(product){
                res.status(200).json({product});
            }
        }
    );

}