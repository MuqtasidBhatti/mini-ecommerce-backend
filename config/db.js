const mongoose = require('mongoose')

let isConnected = false

const connectDB = async () => {
    if (isConnected) return

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        isConnected = conn.connections[0].readyState === 1
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (err) {
        console.error('MongoDB connection error:', err)
        throw err
    }
}

module.exports = connectDB