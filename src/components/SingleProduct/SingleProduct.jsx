import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { images } from "../../constants";
import { useStateValue } from "../../context/StateContext";
import { useGetProductQuery } from "../../services/productApi";
import Navbar from "../Navbar/Navbar";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const [qty, setQty] = useState(1);
    const id = useParams();
    // console.log(id.id);
    const { data: fetchedItem } = useGetProductQuery(id?.id);
    const product = fetchedItem?.responseObject;
    // console.log(product);

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    };
    const productDetails = {
        productId: product?.id,
        // name: product?.name,
        unitPrice: product?.price,
        quantity: qty,
        orderId: 0,
    };

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                ...productDetails,
            },
        });
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
                            <h4>Quantity: </h4>
                            <p>
                                <span onClick={decQty}>
                                    <AiOutlineMinus />
                                </span>
                                <span className="qty_count">{qty}</span>
                                <span onClick={incQty}>
                                    <AiOutlinePlus />
                                </span>
                            </p>
                        </div>

                        <div className="add_btns">
                            <button onClick={addToCart}>Add to Cart</button>
                            <button>Buy NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;