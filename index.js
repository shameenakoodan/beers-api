import express from "express";
import cors from 'cors';
import { getBeerList } from "./controllers/beersController.js";
import router from './routes/beers.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
const port = 3010;

app.use(cors({
  origin: '*'
}));

app.listen(port, (req, res) => {
  console.log("Server is running on " + port);
});

app.use("/", router);
