import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const itemSchema = new mongoose.Schema({
        text: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: boolean,
            default: false,
        },
    }, {
        timestamps: true,
    }
);

const item = mongoose.model("item", itemSchema);
export default item;