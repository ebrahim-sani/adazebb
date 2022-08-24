import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { images } from "../../constants";
import { useGetProductQuery } from "../../services/productApi";
import Navbar from "../Navbar/Navbar";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const id = useParams();
    console.log(id.id);
    const { data: fetchedItem } = useGetProductQuery(id?.id);
    const product = fetchedItem?.responseObject;
    console.log(product);

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
        </div>
    );
};

export default SingleProduct;
