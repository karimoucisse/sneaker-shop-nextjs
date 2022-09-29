import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method } = req
    dbConnect()

    if(method === "GET") {

        try {
            // GET ALL PRODUCT
            const products = await Product.find()
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        const newProduct = new Product(req.body) 
        // CREATE ONE PRODUCT
        try {
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}