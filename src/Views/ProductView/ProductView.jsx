import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronRight, BsDownload } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AddProductCategory, Card, Shops, Sidebar } from "../../components";
import AddStock from "../../components/AddStock";
import {
    useGetCategoriesQuery,
    useGetProductsQuery,
} from "../../services/productApi";
import "./ProductView.scss";

const ProductView = () => {
    const [manageProduct, setManageProduct] = useState(true);
    const [shops, setShops] = useState(false);
    const [productCategories, setProductCategories] = useState(false);
    // const [active, setActive] = useState(false);
    const [toggleStock, setToggleStock] = useState(false);
    const [toggleNewShop, setToggleNewShop] = useState(false);
    const [toggleNewCategory, setToggleNewCategory] = useState(false);
    const { data: fetchedProducts } = useGetProductsQuery();
    const { data: prdCategories } = useGetCategoriesQuery();

    const products = fetchedProducts?.responseObject?.$values;
    const categories = prdCategories?.responseObject?.$values;
    console.log(products);

    const onChangeShop = () => {
        setManageProduct(false);
        setProductCategories(false);
        setShops(true);
    };

    const onChangeManageProduct = () => {
        setShops(false);
        setProductCategories(false);
        setManageProduct(true);
    };

    const onChangeProductCat = () => {
        setManageProduct(false);
        setShops(false);
        setProductCategories(true);
    };

    return (
        <div className="app__product-view">
            <Sidebar />
            <div className="app__productView-component">
                <Card />
                <h3>My Products</h3>
                <div className="app__inner-comp">
                    <div className="app__inner-links">
                        <div className="app__btns">
                            <div
                                className={`${manageProduct ? "active" : ""}`}
                                onClick={() => onChangeManageProduct()}
                            >
                                <span>Manage Products</span>
                            </div>
                            <div
                                className={`${shops ? "active" : ""}`}
                                onClick={() => onChangeShop()}
                            >
                                <span>Shops</span>
                            </div>
                            <div
                                className={`${
                                    productCategories ? "active" : ""
                                }`}
                                onClick={() => onChangeProductCat()}
                            >
                                <span>Products Categories</span>
                            </div>
                        </div>
                    </div>
                    <div className="product__component">
                        <div className="product__items">
                            <div className="product__listings">
                                {manageProduct && (
                                    <div>
                                        <div className="head__btns">
                                            <button>
                                                Filter Table
                                                <span>
                                                    <AiOutlineControl />
                                                </span>
                                            </button>
                                            <Link to="/client/products/add-product">
                                                <button className="addProduct">
                                                    New Product
                                                </button>
                                            </Link>
                                        </div>

                                        <table>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Product Code</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Created On</th>
                                                <th>Status</th>
                                            </tr>

                                            {products?.map((product) => (
                                                <tr key={product.id}>
                                                    <td>{product.name}</td>
                                                    <td>{product.code}</td>
                                                    <td>
                                                        {product.categoryName}
                                                    </td>
                                                    <td>₦{product.price}</td>
                                                    <td>
                                                        {product.dateCreated}
                                                    </td>
                                                    <td className="prd_active">
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() =>
                                                                setToggleStock(
                                                                    true,
                                                                )
                                                            }
                                                            className="prod_update"
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                )}
                                {shops && (
                                    <Shops
                                        setToggleNewShop={setToggleNewShop}
                                    />
                                )}
                                {productCategories && (
                                    <div>
                                        <div className="head__btns">
                                            <button>
                                                Filter Table
                                                <span>
                                                    <AiOutlineControl />
                                                </span>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setToggleNewCategory(true)
                                                }
                                                className="addProduct"
                                            >
                                                New Category
                                            </button>
                                        </div>

                                        <table>
                                            <tr>
                                                <th>Category Name</th>
                                                <th>Create Date</th>
                                                <th>Updated Date</th>
                                                <th>Status</th>
                                            </tr>
                                            {categories?.map((category) => (
                                                <tr>
                                                    <td>{category.name}</td>
                                                    <td>
                                                        {category.dateCreated}
                                                    </td>
                                                    <td>
                                                        {category.dateEdited}
                                                    </td>
                                                    <td className="prd_active">
                                                        Active
                                                    </td>
                                                    <td>
                                                        <button className="prod_update">
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                        {toggleNewShop && (
                            <div className="new__prd-comp">
                                <div className="newProd_head">
                                    <h3>Add new shop</h3>
                                    <MdCancel
                                        onClick={() => setToggleNewShop(false)}
                                    />
                                </div>
                                <div className="form__inp">
                                    <form>
                                        <div className="form__element">
                                            <input type="text" />
                                            <label htmlFor="prd-name">
                                                Shop Name
                                            </label>
                                        </div>
                                        <div className="form__element">
                                            <input type="text" />
                                            <label htmlFor="prd-code">
                                                Shop ID
                                            </label>
                                        </div>

                                        <div className="form__element">
                                            <input type="text" />
                                            <label htmlFor="prd-price">
                                                Status
                                            </label>
                                        </div>
                                        <div className="form__element">
                                            <button type="submit">
                                                Add Shop
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {toggleNewCategory && (
                            <AddProductCategory
                                setToggleNewCategory={setToggleNewCategory}
                            />
                        )}
                        {toggleStock && (
                            <AddStock setToggleStock={setToggleStock} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
