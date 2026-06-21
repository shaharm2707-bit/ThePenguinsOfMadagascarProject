import express from "express";
import penguinsRoutes from "./penguins.routes.js";
import recruitRoutes from "./recruit.routes.js";

const router = express.Router();

router.use("/penguins", penguinsRoutes);
router.use("/recruit", recruitRoutes);

export default router;