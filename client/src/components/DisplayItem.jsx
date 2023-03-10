import React from "react";
import "./DisplayItem.css";
import SkillTag from "./SkillTag";

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
    <div class="JobListingCard-0-3-2437">
      <div class="jobListingCardTopInformation-0-3-2445">
        <div class="topPortion-0-3-2447 biggerTopPortion-0-3-2448">
          <div class="avatarContainer-0-3-2449">
            <img
              class="companyAvatar-0-3-2450"
              src={company_picture}
              alt={{ company_name } + "logo"}
            />
          </div>
          <div class="specialisationContainer-0-3-2454 biggerSpecialisationContainer-0-3-2455">
            <div class="specialisationTag-0-3-2456">{role}</div>
          </div>
          <div class="informationContainer-0-3-2451 biggerInformationContainer-0-3-2452">
            <p class="companynameAndRating-0-3-2453">
              <span>{company_name} </span>
              <span> {company_rating}&nbsp;★</span>
            </p>
            <h2 class="jobListingCardTitle-0-3-2441">{position}</h2>
          </div>
        </div>
        <div class="jobListingCardDetailsContainer-0-3-2459 biggerJobListingCardDetailsContainer-0-3-2460">
          <div class="recencyInformationAndCountry-0-3-2461">
            <span class="recentPosting-0-3-2463">about 5 hours ago </span>
            <div class="country-0-3-2462">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="map-marker-alt"
                class="svg-inline--fa fa-map-marker-alt "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              &nbsp;{company_location}
            </div>
          </div>
          <div>
            <p class="jobListingCardSalary-0-3-2443">
              <span class="salary"> {salary} </span>
              <span class="estimatedSalaryTag">EST</span>
            </p>
          </div>
        </div>
        <div>
          <ul>
            <div class="jobListingCardBottomInformation-0-3-2444">
              {skills.map((skill) => (
                <span class="techStackContainer-0-3-2485">{skill}</span>
              ))}
            </div>
          </ul>
        </div>
        <h1>{skills}</h1>
      </div>
    </div>
  );
};

export default DisplayItem;
