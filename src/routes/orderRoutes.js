import express from 'express';
const router= express.Router();
import { createOrder, getOrderByEmail } from '../controller/orderController.js';


router.get("/email/:email", getOrderByEmail);

router.post("/", createOrder);

// router.update("/:id");

// router.delete("/:id");

export default router;