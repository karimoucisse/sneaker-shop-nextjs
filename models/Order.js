import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            product: { 
                type: Array, required: true
            },
            quantity: {
                type: Number, default: 1
            }
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: "pending"}
},{
    timestamps: true
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)