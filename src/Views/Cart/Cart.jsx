import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import "./Cart.scss";
import { useStateValue } from "../../context/StateContext";
import { getTotalItems, getTotalPrice } from "../../reducer";
import CartItem from "../../components/CartItem";
import { usePlaceOrderMutation } from "../../services/productApi";

const Cart = ({ setShowCart }) => {
    const cartRef = useRef();
    const [{ cart }, dispatch] = useStateValue();
    const products = window.localStorage.getItem("cart");
    const cartItems = JSON.parse(products);
    const [placeOrder] = usePlaceOrderMutation();
    const orderDate = new Date().toJSON();
    const [soldById, setSoldById] = useState(0);
    const [customerId, setCustomerId] = useState(0);
    const [orderNumber, setOrderNumber] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Card");
    const orderItems = JSON.parse(localStorage.getItem("cart"));
    const currency = "NGN";
    const totalQuantity = getTotalItems(cart);
    const totalAmount = parseFloat(getTotalPrice(cart));

    console.log(orderItems);

    const handleCheckOut = async () => {
        const checkoutDetails = {
            orderItems,
            orderNumber,
            soldById,
            totalQuantity,
            totalAmount,
            paymentMethod,
            currency,
            customerId,
            orderDate,
        };
        console.log(checkoutDetails);
        const res = await placeOrder(checkoutDetails);
        console.log(res);
    };

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
                    <span>({getTotalItems(cart)} items)</span>
                </button>

                {cart.length < 1 && (
                    <div className="cart_page-empty">
                        <BiShoppingBag size={150} />
                        <h3>Your shopping cart is empty!</h3>

                        <Link to="/products">
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="cart_page-item">
                    {cartItems.length >= 1 &&
                        cartItems.map((item) => <CartItem item={item} />)}
                </div>

                {cart.length >= 1 && (
                    <div className="cart_page-foot">
                        <div className="cart_page-total">
                            <h3>Subtotal: </h3>
                            <h3>₦{getTotalPrice(cart)}</h3>
                        </div>
                        <div className="card__payment-options">
                            <label for="payment">Select Payment Method: </label>
                            <select
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                                name="methods"
                                id="methods"
                            >
                                <option>Card</option>
                                <option>Check</option>
                                <option>Cash</option>
                                <option>Wallet</option>
                                <option>OnlineCard</option>
                                <option>OnlineUssd</option>
                                <option>OnlineAccountTransfer</option>
                            </select>
                        </div>
                        <div className="cart_page-foot-btn">
                            <button type="button" onClick={handleCheckOut}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
