import express from "express";
import { router } from "./routes/v1";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
    path: "../../.env"
})

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/v1", router)

app.listen(3000)