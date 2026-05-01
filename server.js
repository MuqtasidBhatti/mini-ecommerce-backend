require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
connectDB()

app.use(express.json())

app.use(cors({
  origin: 'https://mini-ecommerce-frontend-eight.vercel.app/',
  credentials: true
}));


const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})

module.exports = app;