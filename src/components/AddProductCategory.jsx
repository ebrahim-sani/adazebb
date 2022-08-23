import React, { useState } from "react";
import "../Views/AddProductPage/AddProductPage.scss";
import { MdCancel } from "react-icons/md";
import { useCreateProductCategoryMutation } from "../services/productApi";

const AddProductCategory = ({ setToggleNewCategory }) => {
  const [productCategoryName, setProductCategoryName] = useState("");

  const [createProductCategory] = useCreateProductCategoryMutation();

  const addProductCategory = async (e) => {
    e.preventDefault();
    // in the real API -> remove the name and make it single string as it is in the swagger template
    const categoryName = {
      name: "book",
    };
    await createProductCategory(categoryName);
    console.log(categoryName);
  };

  return (
    <div className="new__prd-comp">
      <div className="newProd_head">
        <h3>Add new category</h3>
        <MdCancel onClick={() => setToggleNewCategory(false)} />
      </div>
      <div className="form__inp">
        <form>
          <div className="form__element">
            <input
              className={productCategoryName ? "active" : ""}
              type="text"
              value={productCategoryName}
              onChange={(e) => setProductCategoryName(e.target.value)}
            />
            <label htmlFor="prd-name">Category Name</label>
          </div>

          {/* in the swagger template --> note that the form has only one input filed */}
          <div className="form__element">
            <input type="text" />
            <label htmlFor="prd-price">Status</label>
          </div>
          <div className="form__element">
            <button onClick={addProductCategory}>Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductCategory;
