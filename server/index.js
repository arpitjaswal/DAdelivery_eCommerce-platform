import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";

const app = express();
const PORT = 8080;
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);
app.listen(PORT, ()=>console.log(`App is listening at ${PORT}`));

defaultData();