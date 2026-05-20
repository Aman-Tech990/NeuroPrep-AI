import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// .env config
if (process.env.NODE_ENV !== "production") {
    dotenv.config({});
}

// App Initialization
const app = express();
const port = process.env.PORT || 3005;

// Database Connection
connectDB();

// CORS 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Default Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// API Routes
app.use("/api/auth", authRouter);


// App Entry Point
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

export default app;
