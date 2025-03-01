import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const connection = { isConnected: null };

export const connectToDB = async() => {
    try {
        if (connection.isConnected) {
            return;
        }
        // console.log("MONGO_URI:", process.env.MONGO_URI); // Log the MONGO_URI to verify it's loaded correctly
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
      
    } catch (error) {
        console.log("Couldn't connect with the database: ", error);
    }
}

