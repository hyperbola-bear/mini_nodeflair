const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  company_picture: { type: String, required: true },
  company_rating: { type: Number, required: true },
  company_location: { type: String, required: true },
  position: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  salary_range: {
    type: String,
    default: "",
  },

  days: {
    type: Number,
    default: 1,
  },
  skills: [
    {
      type: String,
    },
  ],
});

module.exports = Post = mongoose.model("post", PostSchema);
