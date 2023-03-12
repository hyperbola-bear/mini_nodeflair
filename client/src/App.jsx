import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayList from "./components/DisplayList";
import "./css/App.css";
import { useAtom } from "jotai";
import { nameAtom } from "./atoms.ts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedName, setSelectedName] = useAtom(nameAtom);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
      setSelectedName(res.data[0].company_name);
    };
    fetchPosts();
  }, []);

  return (
    <div class="panels grid grid-cols-2">
      <DisplayList posts={posts} />
      <div class="scrollableContainer">
        <h3>{selectedName}</h3>
      </div>
    </div>
  );
};

export default App;
