const Products = require('../models/product')

const productController = {
    getProducts: async (req, res) => {
        const products = await Products.find()
        res.json(products)
    },
    addProduct: async (req, res) => {
        const { id, title, iamges, description, content, colors, sizes, price } = req.body
        const product = await Products.findOne({id: id})
        if (product)
            return res.status(400).json({
                msg: "Product is already exist"
            })
        const newProduct = new Products({
            id,
            title,
            iamges,
            description,
            content,
            colors,
            sizes,
            price
        })

        await newProduct.save()
        res.json({msg: 'Method post product'})
    },
    updateProduct: async (req, res) => {
        const { id, title, iamges, description, content, colors, sizes, price } = req.body
        await Products.findByIdAndUpdate({ _id: req.params.id }, {
            title,
            iamges,
            description,
            content,
            colors,
            sizes,
            price
        })
        res.json({msg: 'Method put product'})
    },
    deleteProduct: async (req, res) => {
        await Products.findByIdAndDelete(req.params.id)
        res.json({msg: 'Method delete product'})
    },
    getProduct: async (req, res) => {
        const product = await Products.findById(req.params.id)
        res.json(product)
    }
}

module.exports = productController