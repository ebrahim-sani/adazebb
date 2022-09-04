import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { images } from "../../constants";
import "./Header.scss";

function Header() {
  return (
    <div className="app__header app__wrapper">
      <div className="app__header-components">
        <div className="app__header-left">
          <h2 className="app__header-title">
            Manage <span>Business</span> better, with Adazeb.
          </h2>
          <p className="p-text app__header-intro">
            A digital solution that helps you simplify your inventory management
            processes. Monitor inventory, find customer trends, and track
            payments all-in-one box.
          </p>
          <div className="app__header-btns">
            <button className="app__btn-first">
              Get Started
              <span>
                <BsArrowRight />
              </span>
            </button>

            <button>
              <span>
                <AiOutlinePlayCircle />
              </span>
              Quick Demo
            </button>
          </div>
        </div>
        <div className="app__header-right">
          <img src={images.HeaderWoman} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
