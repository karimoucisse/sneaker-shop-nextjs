import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart"

export default async function handler(req, res) {
    const { method, query } = req
    const { id } = req
    dbConnect()
    
    // GET USER CART
    if(method === "GET") {
        const userId = id
        try {
            const cart = await Cart.findById(userId)
            // .exec()
            res.json(cart)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    //CREATE CART
    if(method === "PUT") {
        try {
            const modifyCart = await Cart.findOneAndUpdate(
                {_id: id},
                {...req.body},
                {new: true}
            )
                // .exec()
            res.json(modifyCart)
            console.log(req.body);
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    //DELETE CART
    if(method === "DELETE") {
        try {
            await Cart.findByIdAndDelete( id )
            res.status(200).json("Cart has been deleted !")
        }catch (err) {
            res.status(500).json(err)
        }
    }

}