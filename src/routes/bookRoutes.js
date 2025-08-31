import express from 'express';
const router= express.Router();
import {getAllBooks, getBookById, postBooks, updateBooks, deleteBooks} from '../controller/bookController.js';

//frontend-> backend server -> controller -> book schema -> database -> send book to server-> back to the frontend
//INDEX ROUTE
router.get("/", getAllBooks);

//Show Route
router.get("/:id", getBookById);

//Create Route
router.post("/",postBooks);

//Update route
router.put("/:id", updateBooks);

//delete route
router.delete("/:id", deleteBooks);

export default router;