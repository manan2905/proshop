import express from 'express';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB function call

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req, res)=>{
    res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{console.log(`Server at http://localhost:${port}`)});