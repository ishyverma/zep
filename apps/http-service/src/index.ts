import express from "express";
import { router } from "./routes/v1";
import dotenv from "dotenv";
dotenv.config({
    path: "../../.env"
})

const app = express();
app.use(express.json())

app.use("/api/v1", router)

app.listen(3000)