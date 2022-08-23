import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { useCreateProductMutation } from "../../services/productApi";
import "./AddProductPage.scss";
// import "../../components/Signup/SignUpView.scss";

const AddProductPage = () => {
  const [createProduct, isSuccess, isError, error] = useCreateProductMutation();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [actionOnLowStock, setActionOnLowStock] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [minimumStock, setMinimumStock] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const [stockTrackingEnabled, setStockTrackingEnabled] = useState(false);
  const [canExpire, setCanExpire] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  // what you need to do here is figuring out initial State of `integers`
  // to map it into -> price, productCategoryId, code

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

  let productInfo = {
    name: "LollyPop",
    code: "an1b21",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae vero alias ex.",
    price: 400,
    stockTrackingEnabled: true,
    actionOnLowStock: "i really dont know what is it ;)",
    isActive: true,
    categoryName: "sweets",
    minimumStock: 112,
    productCategoryId: 1,
    canExpire: true,
    imageUrls: ["https://example.com/image.png"],
  };

  const addProduct = async (e) => {
    e.preventDefault();
    await createProduct(prdinfo);
    if (isError) {
      console.log(error);
    }
    console.log(prdinfo);
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
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="prd-name">Product Name</label>
                  </div>
                  <div className="login__form-element">
                    <input
                      className={code ? "active" : ""}
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <label htmlFor="prd-code">Code</label>
                  </div>

                  <div className="login__form-element">
                    <input
                      className={categoryName ? "active" : ""}
                      type="text"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <label htmlFor="prd-price">Product Category</label>
                  </div>
                  <div className="login__form-element">
                    <input
                      className={productCategoryId ? "active" : ""}
                      type="text"
                      value={productCategoryId}
                      onChange={(e) => setProductCategoryId(e.target.value)}
                    />
                    <label htmlFor="prd-price">Product Category ID</label>
                  </div>
                  <div className="login__form-element">
                    <input
                      className={actionOnLowStock ? "active" : ""}
                      type="text"
                      value={actionOnLowStock}
                      onChange={(e) => setActionOnLowStock(e.target.value)}
                    />
                    <label htmlFor="prd-price">Action On Low Stock</label>
                  </div>
                  <div className="login__form-element">
                    <input
                      className={price ? "active" : ""}
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="prd-price">Price</label>
                  </div>
                  <div className="login__form-element">
                    <input
                      className={minimumStock ? "active" : ""}
                      type="text"
                      value={minimumStock}
                      onChange={(e) => setMinimumStock(e.target.value)}
                    />
                    <label htmlFor="prd-price">Stock Quantity</label>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                        onChange={(e) =>
                          setStockTrackingEnabled(e.target.value)
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
                        onChange={(e) => setIsActive(e.target.value)}
                      />
                      <label htmlFor="is-active" style={{ fontSize: "0.8rem" }}>
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
                        onChange={(e) => setCanExpire(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="addProduct__image">
                  <h3>Product Image</h3>
                  <p>
                    We recommend that you upload an image with a resolution of
                    2000 x 2000 for the best results possible.
                  </p>
                  <div>
                    <input
                      className="img-upload"
                      type="file"
                      value={imageUrls}
                      onChange={(e) => setImageUrls(e.target.value)}
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
