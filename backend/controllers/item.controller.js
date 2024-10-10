import item from "../models/item.model.js";

export const createItem = async (req, res) => {
    try {
        const { text } = res.body;
        const newItem = new item({ text });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getItem = async (req, res) => {
    try {
        const items = await item.find().sort({ createdAt: -1});
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, isCompleted } = req.body;
        const updateItem = await item.findByIdAndUpdate(
            id,
            { text, isCompleted },
            { now: true}
        );
        if (!updateItem) {
            return res.status(404).json({ message: "item not found: "});
        }
        res.json(updateItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await item.findByIdAndDelete(id);
        if (!deleteItem) {
            return res.status(404).json({ message: "item not found: "});
        }
        res.json({ message: "item deleted sucessfully!"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAllItem = async (req, res) => {
    try {
        await item.deleteMany({})
        res.json({ message: "All items deleted sucessfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};