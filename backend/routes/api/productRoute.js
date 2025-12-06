const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../models/Products');

// @route GET /products
// @desc Get ALL products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);  // Returns an array, even if empty
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// @route POST /products
// @desc Create a product
router.post('/', async (req, res) => {
    try {
        // Basic validation example (expand as needed)
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({ error: 'Name and price are required' });
        }
        // Parse price to number
        req.body.price = parseFloat(req.body.price);
        if (isNaN(req.body.price)) {
            return res.status(400).json({ error: 'Price must be a valid number' });
        }

        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            photo: req.body.photo  // Assuming photo is a URL or path
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// @route PUT /products/:id
// @desc Update a product
router.put('/:id', async (req, res) => {
    try {
        // Parse price if provided
        if (req.body.price) {
            req.body.price = parseFloat(req.body.price);
            if (isNaN(req.body.price)) {
                return res.status(400).json({ error: 'Price must be a valid number' });
            }
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }  // Returns updated doc, runs schema validators
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
});

// @route DELETE /products/:id
// @desc Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

module.exports = router;