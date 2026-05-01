const express = require('express')
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController')
const { protect, optionalAuth } = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/', protect, createProduct)
router.get('/', optionalAuth ,getProducts)
router.get('/:id', optionalAuth, getProductById)
router.put('/:id', protect, updateProduct)
router.delete('/:id', protect, deleteProduct)

module.exports = router