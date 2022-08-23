import React from "react";
import "./PayView.scss";

import Sidebar from "../../components/Sidebar/Sidebar";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineDns } from "react-icons/md";

const PayView = () => {
  return (
    <div className="payment__page">
      <Sidebar />
      <div className="payment__component">
        <div className="payment__header">
          <h1>Pay Now</h1>
          <p>Here you can make payment for your subscription plans</p>
        </div>

        <div>
          <div className="payment_item">
            <FaCreditCard />
            <h3>Pay with POS</h3>
            <p>Learn more on how to pay with our POS.</p>
            <button>Open</button>
          </div>

          <div className="payment_item">
            <MdOutlineDns />
            <h3>Pay with RexPay</h3>
            <p>Make payment with RexPay.</p>
            <button>Open</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayView;
