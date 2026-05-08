require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors({
  origin: [
    'https://mini-ecommerce-frontend-eight.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true
}))

app.use(express.json())

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payments', paymentRoutes);

module.exports = app