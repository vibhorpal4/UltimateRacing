import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import "../configs/passport.js";

//imprt routes
import authRoutes from "../routes/authRoutes.js";

//initiate express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/v1/auth", authRoutes);

export default app;
