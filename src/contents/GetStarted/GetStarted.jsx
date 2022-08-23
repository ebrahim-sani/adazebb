import React from "react";
import images from "../../constants/images";
import "./GetStarted.scss";

const GetStarted = () => {
  return (
    <div className="app__getStarted app__wrapper">
      <h1 className="head-text">Get Started in 3 Easy Steps</h1>

      <div className="app__getStart-component">
        <div className="app__getStarted-left">
          <div className="app__getStared-item">
            <span>1</span>
            <div>
              <h3>Select Preferred Plan</h3>
              <p>
                To get started, simply select a payment plan that best suits
                your typee of business.
              </p>
            </div>
          </div>

          <div className="app__getStared-item">
            <span>2</span>
            <div>
              <h3>Personal & Business Details</h3>
              <p>
                Provide us with your personal and business details to help us
                understand your business better.
              </p>
            </div>
          </div>

          <div className="app__getStared-item">
            <span>3</span>
            <div>
              <h3>Setup Your Business & Start Selling</h3>
              <p>Setup your inventory, pricing model and start making sales!</p>
            </div>
          </div>
        </div>
        <div className="app__getStarted-right">
          <img src={images.StartedLady} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
