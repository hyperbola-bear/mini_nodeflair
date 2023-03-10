const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
