import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import "../Views/ProductView/ProductView.scss";

const Shops = ({ setToggleNewShop }) => {
    return (
        <div>
            <div className="head__btns">
                <button>
                    Filter Table
                    <span>
                        <AiOutlineControl />
                    </span>
                </button>
                <button
                    onClick={() => setToggleNewShop(true)}
                    className="addProduct"
                >
                    Add Shop
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Shop Name</th>
                        <th>Store ID</th>
                        <th>Created On</th>
                        <th>Updated On</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Joys</td>
                        <td>1998-091</td>
                        <td>Jun 30 2022 5:35 PM</td>
                        <td>Jul 30 2022 9:35 AM</td>
                        <td className="prd_active">In-active</td>
                        <td>
                            <button className="prod_update">Open</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Shops;
