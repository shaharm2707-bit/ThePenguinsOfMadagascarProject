import express from "express";
import { getRecruit } from "../controllers/recruit.controller.js";

const router = express.Router();

router.get("/", getRecruit);

export default router;