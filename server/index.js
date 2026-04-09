import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";

// .env config
if (process.env.NODE_ENV != "production") {
    dotenv.config({});
}

// App Initialization
const app = express();
const port = process.env.PORT;

// Database Connection
connectDB();

// API-Check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Working fine!"
    });
});



// App Entry Point
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

export default app;
