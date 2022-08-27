import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useGetProductsQuery } from "../../services/productApi";
import "./ProductList.scss";

const ProductList = () => {
    const { data: fetchedProducts } = useGetProductsQuery();
    const products = fetchedProducts?.responseObject?.$values;

    const navigate = useNavigate();

    return (
        <div className="prod__list">
            <Navbar />

            <div className="app__products-component">
                <div className="app__product-list">
                    {products?.map((product) => (
                        <div
                            onClick={() => navigate(`/products/${product.id}`)}
                            key={product.$id}
                            className="app__product-card"
                        >
                            <img
                                src={
                                    product?.imageUrl
                                        ? product?.imageUrl
                                        : "https://img.freepik.com/free-vector/book-mockup_1017-6282.jpg"
                                }
                                alt={product?.name}
                            />
                            <div className="app__product-desc">
                                <span>{product?.categoryName ?? "INV"}</span>
                                <h4>{product?.name}</h4>
                                <div className="app__card-footer">
                                    <div className="app__card-price">
                                        <p>Price:</p>
                                        <strong>₦{product?.price}</strong>
                                    </div>
                                    <div className="bag_icon">
                                        <BiShoppingBag />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
