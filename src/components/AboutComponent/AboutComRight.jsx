import React from "react";
import "./AboutComponent.scss";
import { images } from "../../constants/index";
import { BsCreditCard } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

function About() {
  return (
    <div className="app__about app__wrapper">
      <div className="app__about-components">
        <div className="app__about-right">
          <div>
            <div className="app__about-item">
              <span>
                <BsCreditCard />
              </span>

              <div className="app__aboutItem-component">
                <h1>Card & Cash Payments</h1>
                <p className="p-text">
                  We support and capture card & cash payments instantly to allow
                  your customers flexiblity. You can also print payment invoices
                  or send E-receipts.
                </p>
              </div>
            </div>
            <div className="app__about-secItem">
              <span>
                <TbBrandGoogleAnalytics />
              </span>

              <div className="app__aboutItem-component">
                <h1>Reports & Analysis</h1>
                <p className="p-text">
                  Intuitive reports on your business. Quickly view payment
                  reports and sales analytics on the RexRetail terminal or on
                  your mobile.
                </p>
              </div>
            </div>
          </div>
          <span className="app__about-botton">
            Get Started <div />
          </span>
        </div>
        <div className="app__aboutComRight-left">
          <img src={images.LadyCele} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
