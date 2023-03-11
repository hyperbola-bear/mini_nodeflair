const express = require("express");
const router = express.Router();
const config = require("config");
const Post = require("../../models/Post");

//@post api/posts
//@desc create a post
//@access private
router.post("/", async (req, res) => {
  try {
    const {
      company_name,
      company_picture,
      company_rating,
      company_location,
      position,
      role,
      salary_range,
      skills,
    } = req.body;
    const newPost = new Post({
      company_name,
      company_picture,
      company_rating,
      company_location,
      position,
      role,
      salary_range,
      skills,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@get api/posts
//@desc get all posts
//@access private

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// router.get("/", async (req, res) => {
//   console.log("get request");
//   res.json({ msg: "get request" });
// });

module.exports = router;
