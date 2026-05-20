import express from "express";
import { googleAuth } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/google", googleAuth);


export default authRouter;