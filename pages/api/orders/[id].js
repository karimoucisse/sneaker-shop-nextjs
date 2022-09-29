import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order"

export default async function handler(req, res) {
    const { method, query} = req
    const { id } = query
    
    dbConnect()

    //GET USER ORDERS
    if(method === "GET") {
        const userId = id
        try {
            const orders = await Order.find({userId: userId})
            res.status(200).json(orders)

        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    //MODIFY ORDER
    if(method === "PUT") {

        try {
            const modifyOrder = await Order.findByIdAndUpdate(
                {_id: id},
                {...req.body},
                {new: true}
            )
                // .exec()
            res.json(modifyOrder)
        }catch (err){
            console.log(err)
            res.status(500).json(err)
        }
    }
    
    // DELETE ORDER
    if(method === "GET") {

        try {
            await Order.findByIdAndDelete(id)
            res.status(200).json("Order has been deleted !")
        }catch (err) {
            res.status(500).json(err)
        }
    }
}