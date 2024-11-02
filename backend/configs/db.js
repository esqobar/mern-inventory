import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected Successfully: ${conn.connection.host}`.cyan.bold.underline.italic)
    } catch (e) {
        console.error(`Error: ${e.message}`.red.underline.bold.italic)
        process.exit(1);
    }
}

export default connectDB;