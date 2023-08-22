const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Module
const db = require("./config/db");

// Configure
app.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Route File
const PostController = require("./controllers/PostController");

// Routing
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/post", PostController.createPost);

// Database connecting
db.getConnection().then(() => {
  // App running
  app.listen(PORT, (err) => {
    if (err) return console.log("[-] Server Error: " + err);
    return console.log(`[+] Server successfully connecting on port: ${PORT}`);
  });
});
