import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/routes.js";
import bodyParser from "body-parser";
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

Connection();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("app is working");
});
