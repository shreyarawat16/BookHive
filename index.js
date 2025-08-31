import express from 'express';
const app=express();
import bookRoutes from './src/routes/bookRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';

import {connectDB} from './src/config/data.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const port=process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors({
 origin: ["http://localhost:5173"],
 credentials: true,
}))

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

connectDB().then(()=>{
 app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
 })
})
