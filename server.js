import express from "express";
import cors from "cors"
import { logger } from "logger-express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT} `));