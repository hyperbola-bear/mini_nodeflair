import React from "react";
import "../css/DisplayItem.css";
//eslint-disable-next-line
import styles from "../css/input.css";

const DisplayItem = ({
  company_name,
  company_picture,
  company_rating,
  company_location,
  position,
  role,
  salary,
  skills,
}) => {
  return (
    <>
      <div class="jobListingCard outlinePrimary  ">
        <div class="jobListingCardTopInformation">
          <div class="parent topPortion">
            <div class="avatarContainer">
              <img
                class="companyAvatar"
                src={company_picture}
                alt={{ company_name } + "logo"}
              />
            </div>
            <div class="child grid grid-rows-2">
              <div class="companynRating">
                <span>{company_name}&nbsp; &nbsp;</span>
                <span>{company_rating}&nbsp;★</span>
              </div>
              <div class="position">{position}</div>
            </div>
            <div class="specialisationContainer absolute top-3 right-5">
              <div class="specialisationTag">{role}</div>
            </div>
          </div>
          <div class="parent ">
            <div class="recencyTag child">1 day ago</div>
            <div class=" child">
              <svg
                width="16"
                height="16"
                focusable="false"
                data-prefix="fas"
                data-icon="map-marker-alt"
                viewBox="0 0 384 512"
              >
                <path
                  fill="grey"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
            </div>
            <div class="child text-green-500">Singapore</div>
            <div>
              {salary != "" && (
                <p class="jobListingCardSalary">
                  <span class="salary">S$6,586 - S$10,873 / mth </span>
                  <span class="estimatedSalaryTag">EST</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div class="flexbox">
          <div class="jobListingCardBottomInformation flex-shrink">
            <ul>
              {skills.map((skill) => (
                <li class="techStackContainer">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayItem;
