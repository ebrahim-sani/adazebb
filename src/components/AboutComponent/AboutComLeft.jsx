import React from "react";
import "./AboutComponent.scss";
import { images } from "../../constants/index";
import { FiBox } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

function About() {
  return (
    <div className="app__about app__wrapper">
      <div className="app__about-tagline">
        <h1 className="head-text">Grow your business with ease</h1>
        <p>
          A feature-reach platform that allows you to handle your business like
          a boss.
        </p>
      </div>
      <div className="app__about-components">
        <div className="app__about-left">
          <img src={images.AdMan} alt="" />
        </div>
        <div className="app__about-right">
          <div>
            <div className="app__about-item">
              <span>
                <FiBox />
              </span>

              <div className="app__aboutItem-component">
                <h1>Inventory Management</h1>
                <p className="p-text">
                  Keep track of sales and product inventory, manage specific
                  stores and inventory, whether you are online or offline.
                </p>
              </div>
            </div>
            <div className="app__about-secItem">
              <span>
                <BsPeople />
              </span>

              <div className="app__aboutItem-component">
                <h1>Customer Management</h1>
                <p className="p-text">
                  Understand your customers, monitor customer records &
                  behaviour. Setup & manage loyalty programs and discount sales
                  with ease.
                </p>
              </div>
            </div>
          </div>
          <span className="app__about-botton">
            Get Started <div />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
