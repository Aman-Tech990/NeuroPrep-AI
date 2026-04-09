import express from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
    dotenv.config({});
}

// App Initialization
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

export default app;
