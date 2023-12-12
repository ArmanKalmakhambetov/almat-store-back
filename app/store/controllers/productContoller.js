// controllers/ProductController.js
const Product = require('../models/Product');
const {Op} = require("sequelize");

async function createProduct(req, res) {
  try {
    const { mainType, name, price, image, count, type } = req.body;
    const newProduct = await Product.create({
      mainType,
      name,
      price,
      image,
      count,
      type,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (er) {
    console.log(er)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findAll({
      where: {
        id: {
          [Op.eq]: id,
        }
      }
    });
    return res.status(200).json(product);
  } catch (er) {
    console.log(er)
    return res.status(500).json({error: 'Internal Server Error'})
  }
}

module.exports = {
  createProduct, getAllProducts, getProductById
};
