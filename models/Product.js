import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: {type: String, required: true},
    size: {type: Array, required: true},
    types: [
        {
            color: { 
                type: String, required: true
            },
            image: {
                type: String, required: true
            }
        }
    ],
    description: {type: String},
    reviews: {type: Array},
    rating: {type: Number, required: true, default: 0},
    inStock: {type: Number, required: true, default: 0},
    available: {type: Boolean, default: true},
    categories : {type: Array}
},{
    timestamps: true
}) 


const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)
export default Product