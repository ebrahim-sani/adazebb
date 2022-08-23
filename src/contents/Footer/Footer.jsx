import React from "react";
import images from "../../constants/images";
import "./Footer.scss";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-component">
        <div className="app__footer-right">
          <img src={images.RexRetail} alt="logo" />

          <p>
            RexRetail is a digital solution that helps you simplify your
            inventory management processes. Monitor inventory, find customer
            trends and track payments all-in-one box.
          </p>
        </div>
        <div className="app__footer-left">
          <div>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
          </div>
          <div className="app__footer-item">
            <h3>Product</h3>
            <div>
              <a href="#">Our Services</a>
              <a href="#">Our Solutions</a>
              <a href="#">Our Products</a>
            </div>
          </div>
          <div className="app__footer-item">
            <h3>Support</h3>
            <a href="#">FAQs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="app__footer-item">
            <h3>Contact Us</h3>
            <a href="mailto:support@globalaccelerex.com">
              support@globalaccelerex.com
            </a>
            <a href="tel:0700-2223-53739">0700-2223-53739</a>
            <a href="#">12, Eric Moore Street,</a>
            <a href="#">Wemabod Estate,</a>
            <a href="#">Ikeja - Lagos, Nigeria</a>
          </div>
        </div>
      </div>
      <p>&copy; Global RexRetail - 2022. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
