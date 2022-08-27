import React, { useState } from "react";
import axios from "axios";
import { Sidebar } from "../../components";
import {
    useCreateProductMutation,
    useGetCategoriesQuery,
    useGetCategoryQuery,
} from "../../services/productApi";
import "./AddProductPage.scss";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
    const [createProduct] = useCreateProductMutation();

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [prdPrice, setPrdPrice] = useState("");
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
    const [url, setUrl] = useState("");
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const { data: fetchedData } = useGetCategoriesQuery();
    // const { data: fetchedCategory } = useGetCategoryQuery(id);

    const categories = fetchedData?.responseObject?.$values;
    console.log(categories);

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const headers = {
        authorization: `Bearer ${localStorage.getItem("auth")}`,
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);
        console.log(formData);

        try {
            await axios
                .post("https://slemtech.com/inventory/UploadResult", formData, {
                    headers: headers,
                })
                .then((img) => {
                    setUrl(img);
                });
        } catch (err) {
            console.log(err);
        }
    };
    const imageU = url?.data?.responseObject?.secureUrl;
    const imageUrls = [imageU];

    const addProduct = async (e) => {
        e.preventDefault();
        const prdinfo = {
            name,
            code,
            description,
            price,
            stockTrackingEnabled,
            isActive,
            categoryName,
            minimumStock,
            // actionOnLowStock,
            productCategoryId,
            canExpire,
            imageUrls,
        };
        console.log(prdinfo);
        try {
            const res = await createProduct(prdinfo).unwrap();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(categoryName);
    console.log(prdCatId);
    const navigate = useNavigate();

    // const handleCaegory = (e) => {
    //     setCategoryName(e.target.value);
    // };

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

                                    <div className="login__form-element-select">
                                        <select
                                            onChange={(e) =>
                                                setCategoryName(e.target.value)
                                            }
                                            name="methods"
                                            id="ca"
                                        >
                                            <option>
                                                Select Category Name:
                                            </option>
                                            {categories?.map((category) => (
                                                <option key={category.id}>
                                                    {category.id}
                                                    {".  "}
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="login__form-element-select">
                                        <select
                                            onChange={(e) =>
                                                setPrdCatId(e.target.value)
                                            }
                                            id="methods"
                                        >
                                            <option>Select Category No.</option>
                                            {categories?.map((category) => (
                                                <option key={category.name}>
                                                    {category.id}
                                                </option>
                                            ))}
                                        </select>
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
                                            // style={{ display: "none" }}
                                            className="img-upload"
                                            type="file"
                                            onChange={saveFile}
                                        />
                                        <button
                                            type="button"
                                            style={{ padding: "10px 20px" }}
                                            onClick={handleUpload}
                                        >
                                            Choose Product Image
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="form__btns">
                                <span
                                    onClick={() =>
                                        navigate("/client/products/")
                                    }
                                >
                                    Cancel
                                </span>
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
