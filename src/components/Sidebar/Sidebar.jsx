import React, { useState } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList, FaUserAlt } from "react-icons/fa";
import { BsBagCheckFill, BsFillCreditCardFill } from "react-icons/bs";
import { HiChartPie, HiDeviceMobile } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { images } from "../../constants";

function Sidebar() {
    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleSidebar = () =>
        setSidebarActive((sidebarActive) => !sidebarActive);

    return (
        <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
            <img
                src={images.RexRetail}
                className="sidebar__icon"
                onClick={toggleSidebar}
            />
            <div className="sidebar__menu">
                <NavLink
                    to="/dashboard/client"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <MdSpaceDashboard className="sidebar__menuIcon" />
                    <span className="sidebar__tag">Dashboard</span>
                </NavLink>
                <NavLink
                    to="/dashboard/products"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <FaClipboardList className="sidebar__menuIcon" />
                    <span>Products</span>
                </NavLink>
                <NavLink
                    to="/dashboard/customers"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <BsBagCheckFill className="sidebar__menuIcon" />
                    <span>My Customers</span>
                </NavLink>
                <NavLink
                    to="/dashboard/staffs"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <FaUserAlt className="sidebar__menuIcon" />
                    <span>My Staff</span>
                </NavLink>
                <NavLink
                    to="/dashboard/devices"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <HiDeviceMobile className="sidebar__menuIcon" />
                    <span>Devices</span>
                </NavLink>
                <NavLink
                    to="/dashboard/report"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <HiChartPie className="sidebar__menuIcon" />
                    <span>Reports</span>
                </NavLink>
                <NavLink
                    to="/dashboard/pay"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <BsFillCreditCardFill className="sidebar__menuIcon" />
                    <span>Pay</span>
                </NavLink>
                <hr />
                <NavLink
                    to="/dashboard/support"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    onClick={toggleSidebar}
                >
                    <BiSupport className="sidebar__menuIcon" />
                    <span>Support</span>
                </NavLink>
            </div>
        </div>
    );
}
export default Sidebar;
