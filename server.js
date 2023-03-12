const cors = require("cors");
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

// Connect Database
connectDB();

app.use(cors());

app.use(express.json({ extended: false }));
//deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Define Routes
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
