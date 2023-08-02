import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Products from "../models/productModel.js";

const router = express.Router();


router.get("/", asyncHandler(async (req, res)=>{  
    const products = await Products.find({});
    res.json(products);
}));

router.get("/:id", asyncHandler(async (req, res)=>{          
    const product = await Products.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product not found"});
    }
}));

export default router;