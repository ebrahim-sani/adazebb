import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import {
    BsChevronRight,
    BsDownload,
    BsThreeDotsVertical,
} from "react-icons/bs";
import { Sidebar } from "../../components";
import "./DeviceView.scss";

const DeviceView = () => {
    const [active, setActive] = useState(false);
    const [toggleNewCustomer, setToggleNewCustomer] = useState(false);

    return (
        <div className="app__device-view">
            <Sidebar />
            <div className="app__deviceView-component">
                <h3>Devices</h3>
                <p>View and manages all devices on this platform</p>
                <div className="app__inner-comp">
                    <div className="device__component">
                        <div className="device__items">
                            <div className="device__listings">
                                <div className="head__btns">
                                    <button>
                                        Filter Table
                                        <span>
                                            <AiOutlineControl />
                                        </span>
                                    </button>
                                </div>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Device ID</th>
                                            <th>Merchant</th>
                                            <th>Type Of Device</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8hfoh38y-3ihwe-3iug32hu</td>
                                            <td>Test</td>
                                            <td>POS</td>
                                            <td className="prd_active">
                                                Active
                                            </td>
                                            <td>
                                                <BsThreeDotsVertical className="dot_vertical" />
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
            </div>
        </div>
    );
};

export default DeviceView;
