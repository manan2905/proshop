import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is ready");
});

app.get("/api/products", (req, res)=>{  
    res.send(products);
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