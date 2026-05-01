const express = require('express')
const { protect, admin } = require('../middleware/authMiddleware')
const { createOrder, getOrderById, updateOrderToPaid, updateOrderToDelivered, getAllOrders, getMyOrders } = require('../controllers/orderController')
const router = express.Router()

router.post('/', protect, createOrder)
router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)
router.get('/', protect, admin, getAllOrders)

module.exports = router