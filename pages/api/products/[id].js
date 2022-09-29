import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

export default async function handler(req, res) {

    const { method, query } = req
    const { id } = query;
    dbConnect()

    if(method === "GET") {

        try {
            let products;
            
            if(id == "new") {
                // SORT LATEST PRODUCT
                products = await Product.find().sort({createdAt: -1}).limit(4)

            } else if (id == "man" || id == "woman") {
                let gender = id
                gender = gender.charAt(0).toUpperCase() + gender.slice(1)
                // SORT PRODUCT BY CATEGORY
                products = await Product.find({categories: gender})

            } else {
                // GET ONE PRODUCT BY ID
                products = await Product.findById(id)

            }
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    // MODIFY ONE PRODUCT
    if(method === "PUT") {
        try {
            const modifyProduct = await Product.findByIdAndUpdate(
                {_id: id},
                {...req.body},
                {new: true}
            )
                .exec()
            res.json(modifyProduct)
        }catch (err){
            res.status(500).json(err)
        }
    }

    // DELETE ONE PRODUCT BY ID
    if(method === "DELETE") {
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json("product has been deleted !")
        }catch (err) {
            res.status(500).json(err)
        }
    }
}