import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayList from "./components/DisplayList";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="panels">
      <p>{console.log(posts)}</p>
      <DisplayList posts={posts} />
      <div class="jobInformationContainer">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
