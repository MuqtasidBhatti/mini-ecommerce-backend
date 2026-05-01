const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ name, email, password: hashedPassword })
        await user.save()
        res.status(201).json({ message: "New user created" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

module.exports = { registerUser, loginUser }