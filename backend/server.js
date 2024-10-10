import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './config/db.js';
import itemRoutes from './models/item.route.js';

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api", itemRoutes)

app.get("/", (req, res) => {
    res.send("api is running");
})

const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`)
    });
})
    

