import React from "react";
import { Plans } from "../../components";
import "./Subscription.scss";

function SubscriptionPlans() {
  return (
    <div id="#pricing" className="app__plans app__wrapper">
      <h1 className="head-text">Plans for all business sizes</h1>
      <p className="plan__tagline">
        Simple, transparent pricing designed for all business sizes.
      </p>
      <p className="plan__tagline">Pick the right plan for your business</p>
      <div>
        <Plans />
      </div>
    </div>
  );
}

export default SubscriptionPlans;
