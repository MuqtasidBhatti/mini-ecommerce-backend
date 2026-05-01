const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json({ message: "New product created", product })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const search = req.query.search
        const filter = search
            ? { name: { $regex: search, $options: 'i' } }
            : {}
        const products = await Product.find(filter)
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json({ message: "Products updated", product })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.json({ message: "Products deleted", product })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct }