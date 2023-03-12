import React, { useState } from "react";
import DisplayItem from "./DisplayItem";
import "../css/tailwind.css";
import "../css/DisplayList.css";

const DisplayList = ({ posts }) => {
  return (
    <div class="jobListingCardsContainer">
      <ul>
        {posts.map((post) => (
          <DisplayItem
            company_name={post.company_name}
            company_picture={post.company_picture}
            company_rating={post.company_rating}
            company_location={post.company_location}
            position={post.position}
            role={post.role}
            salary={post.salary_range}
            skills={post.skills}
            days={post.days}
            key={post._id}
            id={post._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;
