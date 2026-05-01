const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/Product')

dotenv.config()

const products = [
    {
        user: new mongoose.Types.ObjectId(),
        name: "Nike Air Max",
        image: "https://i.pinimg.com/originals/0f/a9/c3/0fa9c379b42948d1e4e1fc251daafda6.jpg",
        category: "Shoes",
        description: "The Nike Air Max Sneakers combine iconic style with cushioned comfort, featuring responsive Air technology for all-day support and a sporty look perfect for everyday wear.",
        price: 120,
        stock: 10,
        rating: 4.5,
        numReviews: 20
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Adidas T-Shirt",
        image: "https://tse3.mm.bing.net/th/id/OIP.Hcen73dLQI4zMIW8AjP6WQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "Clothing",
        description: "The Adidas Casual T-Shirt offers a clean, versatile design made from soft, breathable fabric, making it ideal for both workouts and casual outings.",
        price: 35,
        stock: 25,
        rating: 4.0,
        numReviews: 12
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Sony Headphones",
        image: "https://tse3.mm.bing.net/th/id/OIP.INCZ9n1gzoVefDbDOIIJyQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "Electronics",
        description: "The Sony Wireless Headphones deliver high-quality sound with deep bass and clear audio, along with a comfortable fit for long listening sessions.",
        price: 250,
        stock: 5,
        rating: 4.8,
        numReviews: 45
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Samsung Galaxy Watch",
        image: "https://images-na.ssl-images-amazon.com/images/I/71EHTkDQqfL.jpg",
        category: "Electronics",
        description: "The Samsung Galaxy Watch Smartwatch blends style and functionality, featuring fitness tracking, health monitoring, and seamless smartphone connectivity.",
        price: 199,
        stock: 8,
        rating: 4.3,
        numReviews: 31
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Levi's Slim Jeans",
        image: "https://media.johnlewiscontent.com/i/JohnLewis/005890223alt1?fmt=auto&$background-off-white$&$rsp-pdp-port-640$",
        category: "Clothing",
        description: "The Levi's Slim Fit Jeans offer a modern, streamlined look with a comfortable fit. Crafted from durable denim, they provide all-day wearability while maintaining a stylish silhouette—perfect for casual outings or smart everyday wear.",
        price: 60,
        stock: 20,
        rating: 4.2,
        numReviews: 18
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Logitech G402 Mouse",
        image: "https://www.city.co.ke/wp-content/uploads/2021/09/W6.jpg",
        category: "Electronics",
        description: "The Logitech G402 Hyperion Fury Gaming Mouse is a high-performance gaming mouse designed for speed and precision. Featuring advanced optical tracking, lightweight design, and customizable buttons, it delivers fast response times and smooth control—perfect for competitive gaming and everyday use.",
        price: 35,
        stock: 15,
        rating: 4.6,
        numReviews: 52
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "New Balance Sneakers",
        image: "https://nb.scene7.com/is/image/NB/melps31f_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
        category: "Shoes",
        description: "The New Balance Running Sneakers provide excellent comfort and stability, designed for both athletic performance and everyday use.",
        price: 95,
        stock: 12,
        rating: 4.4,
        numReviews: 27
    },
    {
        user: new mongoose.Types.ObjectId(),
        name: "Leather Wallet",
        image: "https://www.liner.com.pk/cdn/shop/files/IMG_4632_2.jpg?v=1757749960&width=713",
        category: "Accessories",
        description: "The Genuine Leather Wallet offers a sleek and durable design with multiple compartments, perfect for organizing your essentials in style.",
        price: 29,
        stock: 30,
        rating: 4.1,
        numReviews: 14
    }
]

const seedDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Products seeded!')
    process.exit()
}

seedDB()