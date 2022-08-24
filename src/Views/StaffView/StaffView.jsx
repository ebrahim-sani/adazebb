import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { Card, Sidebar } from "../../components";
import AddStaff from "../../components/AddStaff";
import { useGetAllStaffQuery } from "../../services/accountApi";
import "./StaffView.scss";

const StaffView = () => {
    const [toggleNewStaff, setToggleNewStaff] = useState(false);
    const { data: fetchedData } = useGetAllStaffQuery();
    const staffs = fetchedData?.responseObject.$values;
    // console.log(staffs);

    const OnToggleNewStaff = () => {
        setToggleNewStaff(true);
    };

    return (
        <div className="app__product-view">
            <Sidebar />
            <div className="app__productView-component">
                <Card />
                <h4>
                    My Staff / <span>My Staff List</span>
                </h4>
                <div>
                    <h3>My Staff List</h3>
                    <p>Monitor all your staff activities here</p>
                </div>
                <div className="app__inner-comp">
                    <div className="product__component">
                        <div className="product__items">
                            <div className="product__listings">
                                <div>
                                    <div className="head__btns">
                                        <button>
                                            Filter Table
                                            <span>
                                                <AiOutlineControl />
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => OnToggleNewStaff()}
                                            className="addProduct"
                                        >
                                            Add Staff
                                        </button>
                                    </div>

                                    <table>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Phone Number</th>
                                            <th>Email Address</th>
                                            <th>Staff Role</th>
                                            <th>Status</th>
                                        </tr>
                                        {staffs?.map((staff) => (
                                            <tr key={staff?.id}>
                                                <td>
                                                    {staff?.firstName ?? "Null"}
                                                </td>
                                                <td>
                                                    {staff?.lastName ?? "Null"}
                                                </td>
                                                <td>
                                                    {staff?.phoneNumber ??
                                                        "Null"}
                                                </td>
                                                <td>
                                                    {staff?.email ?? "Null"}
                                                </td>
                                                <td>{staff?.role ?? "Null"}</td>
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
                            </div>
                        </div>
                        {toggleNewStaff && (
                            <AddStaff setToggleNewStaff={setToggleNewStaff} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffView;
