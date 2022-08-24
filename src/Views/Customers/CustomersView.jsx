import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronRight, BsDownload } from "react-icons/bs";
import { AddCustomer, Card, Sidebar } from "../../components";
import "./CustomersView.scss";

const CustomersView = () => {
    const [active, setActive] = useState(false);
    const [toggleNewCustomer, setToggleNewCustomer] = useState(false);

    return (
        <div className="app__product-view">
            <Sidebar />
            <div className="app__productView-component">
                <Card />
                <h3>My Customers</h3>
                <p>View and manage your customers</p>
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
                                        New Customer
                                    </button>
                                </div>

                                <table>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Email Address</th>
                                        <th>Phone Number</th>
                                        <th>Status</th>
                                    </tr>

                                    <tr>
                                        <td>Agba Man</td>
                                        <td>abga@user.com</td>
                                        <td>+234-912-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Labaran</td>
                                        <td>laba@user.com</td>
                                        <td>+234-802-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Guest</td>
                                        <td>guest@user.com</td>
                                        <td>+234-902-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Agba Man</td>
                                        <td>abga@user.com</td>
                                        <td>+234-912-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agba Man</td>
                                        <td>abga@user.com</td>
                                        <td>+234-912-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agba Man</td>
                                        <td>abga@user.com</td>
                                        <td>+234-912-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agba Man</td>
                                        <td>abga@user.com</td>
                                        <td>+234-912-345-6780</td>
                                        <td className="prd_active">Active</td>
                                        <td>
                                            <button className="prod_update">
                                                Update
                                            </button>
                                        </td>
                                    </tr>
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
                    <AddCustomer setToggleNewCustomer={setToggleNewCustomer} />
                )}
            </div>
        </div>
    );
};

export default CustomersView;
