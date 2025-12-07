import mongoose from "mongoose";

export const db = mongoose;

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("Missing MONGODB_URI environment variable");
    }

    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("Failed to connect to DB:", err.message);
        throw err;
    }
};

mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
});