const express = require('express');
const cors = require('cors');
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const stripeRoutes = require('./src/routes/stripeRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', stripeRoutes);

app.use(errorHandler);

module.exports = app;