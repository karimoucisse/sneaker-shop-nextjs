import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order"

export default async function handler(req, res) {
    const { method } = req
    
    dbConnect()

    // CREATE ORDER
    if(method === "POST") {
        const newOrder = new Order(req.body)
        try {
            const savedOrder = await newOrder.save()
            res.status(200).json(savedOrder)   
        } catch (err) {
            res.status(500).json(err)
        }
    }

    // GET ALL ORDERS
    if(method === "GET") {
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}