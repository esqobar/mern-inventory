import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {errorHandler, notFound} from "./middlewares/errorHandler.middleware.js";
import connectDB from './configs/db.js'
import userRoutes from './routes/user.route.js'

//.env config
dotenv.config();

//database config
connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(helmet())
app.use(cookieParser())

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}


app.use("/api/v1/users", userRoutes)

//middlewares
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Running Successfully on port:${port}`.yellow.bold.italic.underline);
})