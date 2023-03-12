import React, { useState } from "react";
import "../css/DisplayItem.css";
//eslint-disable-next-line
import styles from "../css/input.css";
import { useAtom } from "jotai";
import { positionAtom, idAtom } from "../atoms.ts";

export const DisplayItem = ({
  company_name,
  company_picture,
  company_rating,
  company_location,
  position,
  role,
  salary_range,
  skills,
  days,
  id,
}) => {
  const [selectedPosition, setSelectedPosition] = useAtom(positionAtom);
  const [selectedItem, setSelectedItem] = useAtom(idAtom);

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // const handleCallback = async () => {
  //   await delay(1000);
  //   console.log(selectedName);
  //   callback(selectedName);
  // };

  const handleClick = (e) => {
    console.log(company_name, id);
    setSelectedPosition(position);
    setSelectedItem(id);
  };

  return (
    <>
      <div
        class={`jobListingCard ${
          selectedItem === id ? "outlineSecondary" : "outlinePrimary"
        }`}
        onClick={(e) => handleClick(e)}
      >
        {console.log(selectedItem, id)}
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
            <div class="specialisationContainer absolute top-0 right-0">
              <div class="specialisationTag">{role}</div>
            </div>
          </div>
          <div class="parent lowUpper">
            <div class="recencyInformationAndCountry">
              <div class="recencyTag child">
                {days > 3 ? (
                  <div class="recencyTag child">{`${days} days ago`} </div>
                ) : (
                  <div class="recencyTag child text-green-500">
                    {days > 1 ? `${days} days ago` : `1 day ago`}
                  </div>
                )}{" "}
              </div>
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
              <div class="child text-neutral-600">{company_location}</div>
            </div>
            <div>
              {salary_range !== "0" && (
                <p class="jobListingCardSalary">
                  <span class="salary">{salary_range} </span>
                  <span class="estimatedSalaryTag">EST</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div class="jobListingCardBottomInformation">
          <ul>
            {skills.map((skill) => (
              <li class="techStackContainer">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DisplayItem;
