import express from "express";
import { getPenguins, getPenguin } from "../controllers/penguins.controller.js";

const router = express.Router();

router.get("/", getPenguins);
router.get("/:id", getPenguin);

export default router;