import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Backend API listening on port ${port} (ENV=${process.env.NODE_ENV})`);
        });
    } catch (error) {
        console.error("Server failed to start due to critical error:", error.message);
        process.exit(1);
    }
}

startServer();