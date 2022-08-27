import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../services/productApi";
import Navbar from "../Navbar/Navbar";
import "./SingleProduct.scss";
import { addToCart } from "../../app/features/cartSlice";

const SingleProduct = () => {
    const id = useParams();
    const { data: fetchedItem } = useGetProductQuery(id?.id);
    const product = fetchedItem?.responseObject;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const handleClick = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="single_prod">
            <Navbar />
            <div className="single_prod-comp">
                <div key={product?.id}>
                    <div className="single_prod-img">
                        <img
                            src={
                                product?.imageUrl
                                    ? product.imageUrl
                                    : "https://img.freepik.com/free-vector/book-mockup_1017-6282.jpg"
                            }
                            alt={product?.name}
                        />
                    </div>

                    <div className="single_prod-details">
                        <h3>{product?.name}</h3>
                        <strong>Details</strong>
                        <p className="prod_desc">{product?.description}</p>

                        <h4>Price:</h4>
                        <strong>₦{product?.price}</strong>

                        <div className="prod_qty">
                            <h4>
                                Quantity:{" "}
                                {cart.quantity > 1 ? cart.quantity : 1}
                            </h4>
                        </div>

                        <div className="add_btns">
                            <button onClick={() => navigate("/products")}>
                                Back
                            </button>
                            <button onClick={() => handleClick(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
