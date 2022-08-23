import React, { useState } from "react";
import "./PlansComponent.scss";
import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const PlanComponent = ({
  bordColor,
  bgColor,
  planTitle,
  price,
  description,
  btnBorderColor,
  btnTextColor,
  plansFeature1,
  plansFeature2,
  plansFeature3,
  plansFeature4,
  plansFeature5,
}) => {
  const [mobilePlan, setMobilePlanUrl] = useState("");

  const handleClick = () => {
    if (price === "1,000") {
      // setMobilePlanUrl("/sub-mobile");
      // history.pushState("/sub-mobile");

      console.log("This is Mobile Plan");
    } else if (price === "5,000") {
      console.log("This Lease Plan");
    } else if (price === "10,000") {
      console.log("This Outright plan");
    }
  };

  return (
    <div className="app__plansCom">
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "1.5px",
          borderColor: `${bordColor}`,
        }}
        className="app__plansComponent"
      >
        <h3>{planTitle}</h3>
        <p className="app__planCom-desc">{description}</p>
        <div className="app__plansComp-price">
          <h3>₦{price}</h3>
          <span>per month</span>
        </div>
        <button
          onClick={() => handleClick()}
          style={{
            borderStyle: "solid",
            borderWidth: "1.5px",
            borderColor: `${btnBorderColor}`,
            backgroundColor: `${bgColor}`,
            color: `${btnTextColor}`,
          }}
        >
          Get Started
        </button>
        <div className="app__planCom-features">
          <div>
            <BsCheck />
            <p>{plansFeature1}</p>
          </div>
          <div>
            <BsCheck />
            <p>{plansFeature2}</p>
          </div>
          <div>
            <BsCheck />
            <p>{plansFeature3}</p>
          </div>
          <div>
            <BsCheck />
            <p>{plansFeature4}</p>
          </div>
          <div>
            <BsCheck />
            <p>{plansFeature5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
