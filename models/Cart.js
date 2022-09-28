import mongoose from "mongoose"

const CartSchema = mongoose.Schema({
    userId: {type: String},
    products: [
        {
            product: { 
                type: Array
            },
            quantity: {
                type: Number, default: 1
            }
        }
    ],
},{
    timestamps: true
}) 


const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema)
module.exports = Cart