import React from "react";
import DisplayItem from "./DisplayItem";
import "../css/tailwind.css";
import "../css/DisplayList.css";

const DisplayList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <DisplayItem
          class="jobListingCard outlinePrimary"
          company_name={post.company_name}
          company_picture={post.company_picture}
          company_rating={post.company_rating}
          position={post.position}
          role={post.role}
          salary={post.salary}
          skills={post.skills}
          key={post._id}
        />
      ))}
    </ul>
  );
};

export default DisplayList;
