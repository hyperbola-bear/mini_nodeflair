const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/posts", require("./routes/api/posts"));

//deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
