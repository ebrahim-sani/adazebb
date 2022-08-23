import React from "react";
import "./ReportView.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { RiBankFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";
import { MdFactCheck } from "react-icons/md";

const ReportView = () => {
  return (
    <div className="report">
      <Sidebar />
      <div className="report__component">
        <div className="report__header">
          <h1>Reports</h1>
          <p>Monitor all your staffs activities here</p>
        </div>

        <div>
          <div className="report_item">
            <RiBankFill />
            <h3>Sales Reports</h3>
            <p>Reporting on the sales that have happened across your shops.</p>
            <button>Open</button>
          </div>
          <div className="report_item">
            <FaFileAlt />
            <h3>Sattlement Reports</h3>
            <p>Report on how you've been settled for all card transactions.</p>
            <button>Open</button>
          </div>
          <div className="report_item">
            <HiDatabase />
            <h3>Billing Reports</h3>
            <p>Report on how you've been billed for your subscription plan.</p>
            <button>Open</button>
          </div>
          <div className="report_item">
            <MdFactCheck />
            <h3>Cashier Reports</h3>
            <p>Performance reports on the cashiers in your shops.</p>
            <button>Open</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
