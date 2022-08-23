import React, { useState } from "react";
import { images } from "../../constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "../../Views/Cart/Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/dashboard/client">
          <img src={images.RexRetail} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["pricing", "products", "faqs", "login"].map((item) => (
          <li className="app__flex bold-text" key={`link-${item}`}>
            <div />
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <div className="bag_icon" onClick={() => setShowCart(true)}>
          <span>0</span>
          <BiShoppingBag />
        </div>
      </ul>

      {showCart && <Cart setShowCart={setShowCart} />}

      <div className="app__navbar-menu">
        <div className="shopIcon" onClick={() => setShowCart(true)}>
          <span>0</span>
          <BiShoppingBag />
        </div>

        <AiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
          <ul>
            <AiOutlineClose onClick={() => setToggle(false)} />
            {["pricing", "faqs", "login"].map((item) => (
              <li className="" key={`link-${item}`}>
                <div />
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))}
            <div>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
