# Mini E-Commerce - Backend

REST API for the Mini E-Commerce app. Built with Node.js, Express, and MongoDB.

## Features

- JWT-based authentication with role-based access (user and admin)
- Public product browsing, protected cart and checkout
- Full order lifecycle: create, pay, and mark as delivered
- Admin-only routes for order management
- Optional auth middleware for guest product browsing

## Tech Stack

Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Folder Structure

```
├── config/         # MongoDB connection
├── controllers/    # orderController, productController, userController
├── middleware/     # authMiddleware (protect, admin, optionalAuth)
├── models/         # Order, Product, User schemas
├── routes/         # API route definitions
├── seeder.js       # Seed products into database
├── server.js       # Entry point

```

## API Routes

### Auth
- POST /api/users/register
- POST /api/users/login

### Products
- GET /api/products (public)
- GET /api/products/:id (public)
- POST /api/products (protected)
- PUT /api/products/:id (protected)
- DELETE /api/products/:id (protected)

### Orders
- POST /api/orders (protected)
- GET /api/orders/myorders (protected)
- GET /api/orders/:id (protected)
- PUT /api/orders/:id/pay (protected)
- PUT /api/orders/:id/deliver (admin only)
- GET /api/orders (admin only)

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file in the root:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
4. Seed the database with sample products:
`node seeder.js`
5. Run `node server.js`

## Deployment

Deployed on Vercel using vercel.json config.