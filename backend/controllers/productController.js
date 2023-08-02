import asyncHandler from "../middleware/asyncHandler.js";
import Products from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res)=>{  
    const products = await Products.find({});
    res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res)=>{
    const product = await Products.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404);
        throw new Error('Resource not found');
    }
});

export { getProducts, getProductById };