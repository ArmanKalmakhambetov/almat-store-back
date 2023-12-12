// controllers/OrderController.js
const Order = require('../models/Order');

async function createOrder(req, res) {
    try {
        const { product_ids, username, address, phone, status } = req.body;
        const newOrder = await Order.create({
            product_ids,
            username,
            address,
            phone,
            status,
        });

        return res.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createOrder,
};
