import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineLeft, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { images } from "../../constants";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const cartRef = useRef();

  return (
    <div ref={cartRef} className="cart_page">
      <div className="cart_page-component">
        <button
          type="button"
          onClick={() => setShowCart(false)}
          className="cart_page-btn"
        >
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span>(0 items)</span>
        </button>

        {/* if cartItem == 0 -> then render the following div  */}
        {/* <div className="cart_page-empty">
          <BiShoppingBag size={150} />
          <h3>Your shopping cart is empty!</h3>

          <Link to="/products">
            <button type="button" onClick={() => setShowCart(false)}>
              Continue Shopping
            </button>
          </Link>
        </div> */}

        <div className="cart_page-item">
          {/* if cartItem >= 1 -> render the following div  */}
          <div className="cartItem-component">
            <img src={images.demopic} alt="" />

            <div className="cartItem-desc">
              <div className="cartItem_desc-comp">
                <h5>Big blue lego jeep collection</h5>
                <h4>₦200.55</h4>
              </div>

              <div className="cartItem-qty">
                <div>
                  <p className="flex border p-[6px]">
                    <span
                    //   onClick={() =>
                    //     toggleCartItemQuantity(item._id, "dec")
                    //   }
                    >
                      <AiOutlineMinus />
                    </span>
                    <span>1</span>
                    <span
                    //   onClick={() =>
                    //     toggleCartItemQuantity(item._id, "inc")
                    //   }
                    >
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  //   onClick={() => onRemove(item)}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* if cartItem is <= 0...don't render component below */}
        <div className="cart_page-foot">
          <div className="cart_page-total">
            <h3>Subtotal: </h3>
            <h3>₦200.55</h3>
          </div>

          <div className="cart_page-foot-btn">
            <button
              type="button"
              //   onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
