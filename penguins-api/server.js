import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Penguins API is running on port ${PORT}`);
});