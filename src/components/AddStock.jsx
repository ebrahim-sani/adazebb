import React, { useState } from "react";
import "../Views/AddProductPage/AddProductPage.scss";
import { toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import {
    useAddStockMutation,
    useRemoveStockMutation,
} from "../services/productApi";

const AddStock = ({ setToggleStock }) => {
    const [inProductId, setInProductId] = useState("");
    const [inValue, setInValue] = useState("");
    const value = parseInt(inValue);
    const productId = parseInt(inProductId);

    const [addStock] = useAddStockMutation();
    const [removeStock] = useRemoveStockMutation();

    const addstock = async (e) => {
        e.preventDefault();
        const res = await addStock({ productId, value });

        res.data.isSuccessful === true &&
            toast.info("Stock Added Successfully", {
                position: "top-left",
            });
    };

    const removestock = async (e) => {
        e.preventDefault();
        const res = await removeStock({ productId, value });

        res.data.isSuccessful === true &&
            toast.info("Stock Added Successfully", {
                position: "top-left",
            });
    };

    return (
        <div className="new__prd-comp">
            <div className="newProd_head">
                <h3>Add Stock</h3>
                <MdCancel onClick={() => setToggleStock(false)} />
            </div>
            <div className="form__inp">
                <form>
                    <div className="form__element">
                        <input
                            className={inProductId ? "active" : ""}
                            type="text"
                            value={inProductId}
                            onChange={(e) => setInProductId(e.target.value)}
                        />
                        <label htmlFor="prd-name">Product ID</label>
                    </div>

                    <div className="form__element">
                        <input
                            className={value ? "active" : ""}
                            value={inValue}
                            type="text"
                            onChange={(e) => setInValue(e.target.value)}
                        />
                        <label htmlFor="prd-price">Value</label>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            padding: "10px",
                        }}
                    >
                        <button onClick={removestock}>Remove Stock</button>
                        <button onClick={addstock}>Add Stock</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStock;
