import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to MongoDB!`);
    } catch (error) {
        console.log(`Failed to connect to MongoDB!`);
    }
}

export default connectDB;