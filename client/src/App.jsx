import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayList from "./components/DisplayList";
import "./css/App.css";
import { useAtom } from "jotai";
import { positionAtom, idAtom } from "./atoms.ts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPosition, setSelectedPosition] = useAtom(positionAtom);
  const [selectedItem, setSelectedItem] = useAtom(idAtom);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
      setSelectedPosition(res.data[0].position);
      setSelectedItem(res.data[0]._id);
    };
    fetchPosts();
  }, []);

  return (
    <div class="panels grid grid-cols-2">
      <DisplayList posts={posts} />
      <div class="scrollableContainer">
        <h3>{selectedPosition}</h3>
      </div>
    </div>
  );
};

export default App;
