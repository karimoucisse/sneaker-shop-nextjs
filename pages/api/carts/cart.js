import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart"

export default async function handler(req, res) {
    const { method } = req
    dbConnect()
    
    // GET ALL CART
    if(method === "GET") {
        try {
            const carts = await Cart.find()
            res.status(200).json(carts)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    //CREATE CART
    if(method === "POST") {
        const newCart = new Cart ({...req.body})
        try {
            const savedCart = await newCart.save()
            res.status(200).json(savedCart)
        }catch (err) {
            res.status(500).json(err)
        }
    }

}