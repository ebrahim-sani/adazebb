import React from "react";
import PlanComponent from "../PlansComponent/PlanComponent";
import "./Plans.scss";

function Plans() {
  return (
    <div className="app__plans">
      <div className="app__plans-component">
        <PlanComponent
          id="_btn"
          planTitle="Mobile Plan"
          description="This plan allows you to get started on your phone. 
          You can make cash sales from your store directly in your mobile phone."
          price="1,000"
          btnBorderColor="var(--secondary-color)"
          btnTextColor="#ed1c25"
          bgColor="white"
          bordColor="rgb(168, 168, 168)"
          plansFeature1="Access Via Moble Phones."
          plansFeature2="Make Cash Sales"
          plansFeature3="Monitor Inventory"
          plansFeature4="More Plan Benefits"
          plansFeature5="& more.."
        />

        <PlanComponent
          planTitle="Lease Plan"
          description="This plan offers you the flexiblity to lease POS devices as well as 
          access the RexRetail app and receive cash payments."
          price="5,000"
          btnBorderColor="var(--secondary-color)"
          btnTextColor="#fff"
          bgColor="var(--secondary-color)"
          bordColor="#ed1c25"
          plansFeature1="Everything on Mobile Plan."
          plansFeature2="Lease POS Terminals"
          plansFeature3="Choose No. of POS to own"
          plansFeature4="Receive Card Payments"
          plansFeature5="More Plan Benefits"
        />

        <PlanComponent
          planTitle="Outright Plan"
          description="This plan allows you to make payments to own the POS 
          device at a go, and access RexRetail with one subscription."
          price="10,000"
          btnBorderColor="var(--secondary-color)"
          btnTextColor="#ed1c25"
          bgColor="white"
          bordColor="rgb(168, 168, 168)" // #ed1c25
          plansFeature1="Everything on Lease Plan"
          plansFeature2="Own POS Terminal(s)"
          plansFeature3="Accept Cash & Payments"
          plansFeature4="More Plan Benefits"
          plansFeature5="& more.."
        />
      </div>
    </div>
  );
}

export default Plans;
