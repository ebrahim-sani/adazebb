import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { useCreateProductMutation } from "../../services/productApi";
import "./AddProductPage.scss";
// import "../../components/Signup/SignUpView.scss";

const AddProductPage = () => {
    const [createProduct, isSuccess, isError, error] =
        useCreateProductMutation();

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [prdPrice, setPrdPrice] = useState("");
    const [actionOnLowStock, setActionOnLowStock] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [minStock, setMinStock] = useState("");
    const [prdCatId, setPrdCatId] = useState("");
    const [stockTrackingEnabled, setStockTrackingEnabled] = useState(false);
    const [canExpire, setCanExpire] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState("");

    const minimumStock = parseFloat(minStock);
    const price = parseFloat(prdPrice);
    const productCategoryId = parseFloat(prdCatId);
    const imageUrls = [image];

    let prdinfo = {
        name,
        code,
        description,
        price,
        stockTrackingEnabled,
        actionOnLowStock,
        isActive,
        categoryName,
        minimumStock,
        productCategoryId,
        canExpire,
        imageUrls,
    };

    const addProduct = async (e) => {
        e.preventDefault();

        try {
            const res = await createProduct(prdinfo).unwrap();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add__product">
            <div>
                <Sidebar />
                <div className="add__product-component">
                    <h3>
                        My Product <span>/ Add New products</span>
                    </h3>

                    <div className="addProduct__field">
                        <form onSubmit={(e) => addProduct(e)}>
                            <div className="form_comp">
                                <div className="addProduct__details">
                                    <div className="login__form-element">
                                        <input
                                            className={name ? "active" : ""}
                                            type="text"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-name">
                                            Product Name
                                        </label>
                                    </div>
                                    <div className="login__form-element">
                                        <input
                                            className={code ? "active" : ""}
                                            type="text"
                                            value={code}
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-code">Code</label>
                                    </div>

                                    <div className="login__form-element">
                                        <input
                                            className={
                                                categoryName ? "active" : ""
                                            }
                                            type="text"
                                            value={categoryName}
                                            onChange={(e) =>
                                                setCategoryName(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-price">
                                            Product Category
                                        </label>
                                    </div>
                                    <div className="login__form-element">
                                        <input
                                            className={prdCatId ? "active" : ""}
                                            type="text"
                                            value={prdCatId}
                                            onChange={(e) =>
                                                setPrdCatId(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-price">
                                            Product Category ID
                                        </label>
                                    </div>
                                    <div className="login__form-element">
                                        <input
                                            className={
                                                actionOnLowStock ? "active" : ""
                                            }
                                            type="text"
                                            value={actionOnLowStock}
                                            onChange={(e) =>
                                                setActionOnLowStock(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <label htmlFor="prd-price">
                                            Action On Low Stock
                                        </label>
                                    </div>
                                    <div className="login__form-element">
                                        <input
                                            className={price ? "active" : ""}
                                            type="text"
                                            value={prdPrice}
                                            onChange={(e) =>
                                                setPrdPrice(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-price">Price</label>
                                    </div>
                                    <div className="login__form-element">
                                        <input
                                            className={minStock ? "active" : ""}
                                            type="text"
                                            value={minStock}
                                            onChange={(e) =>
                                                setMinStock(e.target.value)
                                            }
                                        />
                                        <label htmlFor="prd-price">
                                            Stock Quantity
                                        </label>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "10px",
                                                gap: "5px",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                value={stockTrackingEnabled}
                                                onClick={() =>
                                                    setStockTrackingEnabled(
                                                        true,
                                                    )
                                                }
                                            />
                                            <label
                                                style={{ fontSize: "0.8rem" }}
                                                htmlFor="enable-stock-tracking"
                                            >
                                                Stock tracking
                                            </label>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "10px",
                                                gap: "5px",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                value={isActive}
                                                onClick={() =>
                                                    setIsActive(true)
                                                }
                                            />
                                            <label
                                                htmlFor="is-active"
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                Is Active
                                            </label>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "10px",
                                                gap: "5px",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                value={canExpire}
                                                onClick={() =>
                                                    setCanExpire(true)
                                                }
                                            />
                                            <label
                                                htmlFor="can-expire"
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                Can Expire
                                            </label>
                                        </div>
                                    </div>

                                    <textarea
                                        placeholder="Description"
                                        name="description"
                                        id="desc"
                                        cols="30"
                                        rows="10"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>

                                <div className="addProduct__image">
                                    <h3>Product Image</h3>
                                    <p>
                                        We recommend that you upload an image
                                        with a resolution of 2000 x 2000 for the
                                        best results possible.
                                    </p>
                                    <div>
                                        <input
                                            className="img-upload"
                                            type="file"
                                            value={image}
                                            onChange={(e) =>
                                                setImage(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form__btns">
                                <span>Cancel</span>
                                <button type="submit">Create Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
