import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method, query } = req
    dbConnect()

    if(method === "GET") {
        const qNew = query.new
        const qCategory = query.category
        try {
            let products;
            // if(qNew) {
            //     // SORT LATEST PRODUCT
            //     products = await Product.find().sort({createdAt: -1}).limit(4)
            // } else if (qCategory) {
            //     // SORT PRODUCT BY CATEGORY
            //     products = await Product.find({categories: qCategory})
            // } else {
                // GET ALL PRODUCT
                products = await Product.find()
            // }
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        const newProduct = new Product(req.body) 
        try {
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}