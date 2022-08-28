import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronRight, BsDownload } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Sidebar } from "../../components";
import "./Support.scss";

const Support = () => {
    const [active, setActive] = useState(false);
    const [toggleNewCustomer, setToggleNewCustomer] = useState(false);

    return (
        <div className="app__product-view">
            <Sidebar />
            <div className="app__productView-component">
                <h3>Support</h3>
                <p>View and manage your open complaint</p>
                <div className="app__inner-comp">
                    <div className="customers__component">
                        <div className="customers__items">
                            <div className="customers__listings">
                                <div className="head__btns">
                                    <button>
                                        Filter Table
                                        <span>
                                            <AiOutlineControl />
                                        </span>
                                    </button>
                                    <button
                                        onClick={() =>
                                            setToggleNewCustomer(true)
                                        }
                                        className="addProduct"
                                    >
                                        Raise Complaint
                                    </button>
                                </div>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Dispute Ref</th>
                                            <th>Merchant Name</th>
                                            <th>Category</th>
                                            <th>Created On</th>
                                            <th>Updated On</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3GH7U</td>
                                            <td>Test</td>
                                            <td>Order</td>
                                            <td>Aug 5, 2022 3:33 AM</td>
                                            <td> - </td>
                                            <td className="prd_active">Open</td>
                                            <td>
                                                <button className="prod_update">
                                                    Open
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="app__filterings">
                        <div className="left__items">
                            <p>
                                items per page{" "}
                                <span>
                                    10 items <BiChevronDown />
                                </span>
                            </p>
                        </div>
                        <div className="mid__items">
                            <p
                                className={`${active && "p-acive"} `}
                                onClick={() => setActive(true)}
                            >
                                1
                            </p>
                            <p>2</p>
                            <div>
                                <BsChevronRight />
                            </div>
                        </div>
                        <div className="right__items">
                            <p>Showing 1-10 of 12</p>
                        </div>
                    </div>
                    <div className="app__downlaod">
                        <button>
                            <BsDownload /> Download as CSV
                        </button>
                    </div>
                </div>
                {toggleNewCustomer && (
                    <div className="new__prd-comp">
                        <div className="newProd_head">
                            <div>
                                <h3>Raise Support</h3>
                                <p>
                                    Have an issue? Feel free to tell us about
                                    it.
                                </p>
                            </div>
                            <MdCancel
                                onClick={() => setToggleNewCustomer(false)}
                            />
                        </div>
                        <div className="form__inp">
                            <form>
                                <div className="form__element">
                                    <input type="text" />
                                    <label htmlFor="dis-ref">
                                        Dispute Reference
                                    </label>
                                </div>
                                <div className="form__element">
                                    <input type="text" />
                                    <label htmlFor="prd-code">Category</label>
                                </div>
                                <div className="form__element-btns">
                                    <span>Cancel</span>
                                    <button>Raise Complaint</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Support;
