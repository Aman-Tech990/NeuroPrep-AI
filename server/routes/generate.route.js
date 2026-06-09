import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { generateNotes } from "../controllers/generate.controller.js";

const notesRouter = express.Router();

notesRouter.post("/generateNotes", isAuth, generateNotes);

export default notesRouter;