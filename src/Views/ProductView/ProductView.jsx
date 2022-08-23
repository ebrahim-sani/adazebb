import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronRight, BsDownload } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AddProductCategory, Card, Shops, Sidebar } from "../../components";
import "./ProductView.scss";

const ProductView = () => {
  const [manageProduct, setManageProduct] = useState(true);
  const [shops, setShops] = useState(false);
  const [productCategories, setProductCategories] = useState(false);
  // const [active, setActive] = useState(false);
  const [toggleNewProd, setToggleNewProd] = useState(false);
  const [toggleNewShop, setToggleNewShop] = useState(false);
  const [toggleNewCategory, setToggleNewCategory] = useState(false);

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
                className={`${productCategories ? "active" : ""}`}
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
                        <button className="addProduct">New Product</button>
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

                      <tr>
                        <td>Biro</td>
                        <td>hi</td>
                        <td>Stencil</td>
                        <td>₦90.00</td>
                        <td>Jul 29 2022 4:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>toast bread</td>
                        <td>toast</td>
                        <td>bread spread</td>
                        <td>₦250.00</td>
                        <td>Jul 25 2022 2:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>kamisafe</td>
                        <td>9888Safe</td>
                        <td>Meesse</td>
                        <td>₦300.00</td>
                        <td>Jul 30 2022 6:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ss1</td>
                        <td>ss1</td>
                        <td>Milk</td>
                        <td>₦150.00</td>
                        <td>Jul 29 2022 4:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Bags</td>
                        <td>Locals</td>
                        <td>BAGS</td>
                        <td>₦50.00</td>
                        <td>Jul 20 2022 4:00 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Burger</td>
                        <td>Bug</td>
                        <td>Food</td>
                        <td>₦250.00</td>
                        <td>Jul 27 2022 3:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Cocacola</td>
                        <td>Cock</td>
                        <td>Soft</td>
                        <td>₦100.00</td>
                        <td>Jul 29 2022 7:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Smoove</td>
                        <td>Lemon</td>
                        <td>Soft</td>
                        <td>₦100.00</td>
                        <td>Jul 29 2022 8:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Smoove</td>
                        <td>Lemon</td>
                        <td>Soft</td>
                        <td>₦100.00</td>
                        <td>Jul 29 2022 8:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Smoove</td>
                        <td>Lemon</td>
                        <td>Soft</td>
                        <td>₦100.00</td>
                        <td>Jul 29 2022 8:50 PM</td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                )}
                {shops && <Shops setToggleNewShop={setToggleNewShop} />}
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
                        onClick={() => setToggleNewCategory(true)}
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

                      <tr>
                        <td>Stencil</td>
                        <td>Jan 20 2022 4:40 PM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Bolk</td>
                        <td>Jan 23 2022 5:40 PM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Soft</td>
                        <td>Feb 23 2022 5:00 PM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Juice</td>
                        <td>Feb 13 2022 6:00 PM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Food</td>
                        <td>Jun 17 2022 8:00 AM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lam</td>
                        <td>Jun 08 2022 8:50 AM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Banana</td>
                        <td>Mar 08 2022 10:50 PM</td>
                        <td> - </td>
                        <td className="prd_active">Active</td>
                        <td>
                          <button className="prod_update">Update</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                )}
              </div>
            </div>
            {toggleNewShop && (
              <div className="new__prd-comp">
                <div className="newProd_head">
                  <h3>Add new shop</h3>
                  <MdCancel onClick={() => setToggleNewShop(false)} />
                </div>
                <div className="form__inp">
                  <form>
                    <div className="form__element">
                      <input type="text" />
                      <label htmlFor="prd-name">Shop Name</label>
                    </div>
                    <div className="form__element">
                      <input type="text" />
                      <label htmlFor="prd-code">Shop ID</label>
                    </div>

                    <div className="form__element">
                      <input type="text" />
                      <label htmlFor="prd-price">Status</label>
                    </div>
                    <div className="form__element">
                      <button type="submit">Add Shop</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {toggleNewCategory && (
              <AddProductCategory setToggleNewCategory={setToggleNewCategory} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
