import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import "./Cart.scss";
import CartItem from "../../components/CartItem";
import { usePlaceOrderMutation } from "../../services/productApi";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../app/features/cartSlice";
import { toast } from "react-toastify";

const Cart = ({ setShowCart }) => {
    const cartRef = useRef();
    const [placeOrder] = usePlaceOrderMutation();
    const orderDate = new Date().toJSON();
    const [soldById, setSoldById] = useState(0);
    const [customerId, setCustomerId] = useState(0);
    const [orderNumber, setOrderNumber] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Card");
    const cart = useSelector((state) => state.cart);
    const currency = "NGN";
    const dispatch = useDispatch();
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    const orderitems = cartItem.map((item) => {
        const unitPrice = item.price;
        const productId = item.id;
        const quantity = item.quantity;
        const newYel = { unitPrice, productId, quantity, orderId: 0 };

        return newYel;
    });

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    const totalAmount = cart.cartTotalAmount;
    const totalQuantity = cartTotalQuantity;

    const checkoutDetails = {
        orderitems,
        orderNumber,
        soldById,
        totalQuantity,
        totalAmount,
        paymentMethod,
        currency,
        customerId,
        orderDate,
    };

    const handleCheckOut = async () => {
        try {
            const res = await placeOrder(checkoutDetails).unwrap();
            console.log(res);

            toast.info("Order Placed Successfully.", {
                position: "top-left",
            });
        } catch (error) {
            console.log(error);
            toast.warn("Something went wrong.", {
                position: "top-left",
            });
        }

        // res.data.isSuccessful === true
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
                    <span>({cartTotalQuantity} items)</span>
                </button>

                {cart.cartItems.length < 1 && (
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
                    {cart.cartItems.length >= 1 &&
                        cart.cartItems.map((item) => <CartItem item={item} />)}
                </div>

                {cart.cartItems.length >= 1 && (
                    <div className="cart_page-foot">
                        <div className="cart_page-total">
                            <h3>Subtotal: </h3>
                            <h3>₦{cart.cartTotalAmount}</h3>
                        </div>
                        <div className="card__payment-options">
                            <div>
                                <label for="payment">
                                    Select Payment Method:{" "}
                                </label>
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
                                <button onClick={handleCheckOut}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
