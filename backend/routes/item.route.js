import express from "express";
import{
    createItem,
    getItem,
    updateItem,
    deleteItem,
    deleteAllItems
} from "../controllers/item.controller.js";

const router = express.Router();

router.post("/items", createItem);

router.get("/items", getItem);

router.put("/items/:id", updateItem);

router.delete("/items/:id", deleteItem);

router.delete("/items", deleteAllItems);

export default router;