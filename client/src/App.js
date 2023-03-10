import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayList from "./components/DisplayList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/api/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <p>{console.log(posts)}</p>
      <DisplayList posts={posts} />
    </>
  );
};

export default App;
