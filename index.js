//import
import express from "express";
import mongoose from "mongoose";
import auth from "./src/routes/autRoutes/index.js";
import categorie from "./src/routes/categorie/categorie.js";
import project from "./src/routes/project/project.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();
//expreess function
const app = express();

//connect to mongoDB database

mongoose.connect("mongodb://localhost:27017/invest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/auth", auth);
app.use("/categorie", categorie);
app.use("/project", project);
app.listen("3002", () => console.log("Server Running at port : 3002"));
