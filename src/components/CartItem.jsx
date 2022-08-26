import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateValue } from "../context/StateContext";

const CartItem = ({ item }) => {
    const [{ cart }, dispatch] = useStateValue();

    const plusQuantity = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: item.id,
            },
        });
    };

    const minusQuantity = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: item.id,
        });
    };

    const removeItem = () => {
        dispatch({
            type: "REMOVE_ALL_ITEMS",
            id: item.id,
        });
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
                            <span onClick={minusQuantity}>
                                <AiOutlineMinus />
                            </span>
                            <span>{item.quantity}</span>
                            <span onClick={plusQuantity}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>

                    <button type="button" onClick={removeItem}>
                        <TiDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
