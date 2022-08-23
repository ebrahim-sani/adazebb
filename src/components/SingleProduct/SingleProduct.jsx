import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar";
import "./SingleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="single_prod">
      <Navbar />
      <div className="single_prod-comp">
        <div className="single_prod-img">
          <img src={images.demopic} alt="" />
        </div>

        <div className="single_prod-details">
          <h3>Big blue lego jeep collection</h3>
          <strong>Details</strong>
          <p className="prod_desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            vitae laborum, minus similique dignissimos a nihil ipsa temporibus
            corrupti commodi vel eum nam accusamus id voluptas recusandae amet
            sit aperiam quo aspernatur fugit pariatur soluta. Nostrum saepe
            reiciendis nemo quae animi? Doloremque autem laudantium vero numquam
            maxime ipsum eaque nisi.
          </p>

          <h4>Price:</h4>
          <strong>₦1200.55</strong>

          <div className="prod_qty">
            <h4>Quantity: </h4>
            <p>
              <span>
                <AiOutlineMinus />
              </span>
              <span className="qty_count">0</span>
              <span>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="add_btns">
            <button>Add to Cart</button>
            <button>Buy NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
