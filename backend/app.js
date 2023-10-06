import express from "express";
import database from "./DB/dbConnect.js";
import cors from 'cors'
import userRote from './routes/rotues.js'
import bodyParser from "body-parser";
const app = express();

database();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(userRote);

app.listen(7550,()=>{
    console.log("serer is running", 7550)
})