// Imports
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require('path');
const apiRouter = require("./apiRouter").router;

// Instantiate server
const server = express();

//Init helmet
server.use(helmet());

// Body Parser Configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Headers for CORS
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Configures routes
server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Welcome to Sharemania API</h1>");
});

// 
server.use("/imagesAndVideos", express.static(path.join(__dirname, "imagesAndVideos")));

server.use("/api/", apiRouter);

// Launch server
server.listen(8080, () => {
  console.log(" ---- Serveur en écoute ---- ");
});
