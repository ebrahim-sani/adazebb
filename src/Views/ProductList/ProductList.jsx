import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Navbar } from "../../components";
import { images } from "../../constants";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <div className="prod__list">
      <Navbar />

      <div className="app__products-component">
        <div className="app__product-list">
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦1200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <div className="app__product-card">
            <img src={images.demopic} alt="" />
            <div className="app__product-desc">
              <span>Lamps</span>
              <h4>Big blue lego jeep collection</h4>
              <div className="app__card-footer">
                <div className="app__card-price">
                  <p>Price:</p>
                  <strong>₦200.55</strong>
                </div>
                <div className="bag_icon">
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
