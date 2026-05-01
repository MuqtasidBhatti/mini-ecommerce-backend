const Order = require('../models/Order')


const createOrder = async (req, res) => {
    try {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice } = req.body

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: "No order items" })
        }

        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice

        })

        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: "Order not found" })
        }
        res.json(order)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const updateOrderToPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: "Order not found" })
        }

        order.isPaid = true
        order.paidAt = Date.now()
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const updateOrderToDelivered = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) return res.status(404).json({ message: 'Order not found' })

        order.isDelivered = true
        order.deliveredAt = Date.now()
        order.isPaid = true  
        order.paidAt = Date.now()  

        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
        res.json(orders)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email')
        res.json(orders)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

module.exports = { createOrder, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders, getAllOrders }