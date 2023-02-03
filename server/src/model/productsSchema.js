import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    offer : {
        type: Number
    },
    pictures : [
        {
            img: {
                type: String
            }
        }
    ],
    reviews:[
        {
            //foregin key
            userId: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String 
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref : 'Category'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',

    },
    updatedAt: Date,

},
    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);
export default Product;