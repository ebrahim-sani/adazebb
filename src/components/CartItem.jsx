import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
    decreaseQty,
    increaseQty,
    removeFromCart,
} from "../app/features/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleInc = (item) => {
        dispatch(increaseQty(item));
    };
    const handleDec = (item) => {
        dispatch(decreaseQty(item));
    };

    return (
        <div key={item.id} className="cartItem-component">
            <img
                src={
                    item.imageUrl
                        ? item.imageUrl
                        : "https://img.freepik.com/free-vector/book-mockup_1017-6282.jpg"
                }
                alt=""
            />

            <div className="cartItem-desc">
                <div className="cartItem_desc-comp">
                    <h5>{item.name}</h5>
                    <h4>₦{item.price}</h4>
                </div>

                <div className="cartItem-qty">
                    <div>
                        <p className="flex border p-[6px]">
                            <span onClick={() => handleDec(item)}>
                                <AiOutlineMinus />
                            </span>
                            <span>{item.quantity}</span>
                            <span onClick={() => handleInc(item)}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>

                    <button type="button" onClick={() => handleRemove(item)}>
                        <TiDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
