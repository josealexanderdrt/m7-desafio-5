import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import joyasRouter from "./routes/joyasRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api/v1", joyasRouter);

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT} `));
