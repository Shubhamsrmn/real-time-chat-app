import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookiesParser from "cookie-parser";

import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.use("/users", userRouter);

export default app;
