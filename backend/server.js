import express from 'express';
import products from './data/products.js';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is ready");
});

app.get("/api/products", (req, res)=>{  
    res.json(products);
});

app.get("/api/products/:id", (req, res)=>{          
    const product = products.find((x)=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product not found"});
    }
});

app.listen(port, ()=>{console.log(`Server at http://localhost:${port}`)});