import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { Card, Sidebar } from "../../components";
import "./DashboardView.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 200 },
];

const COLORS = ["#ed1c25", "rgb(160, 12, 12)", "gray"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashboardView = () => {
  return (
    <div className="app__dashboard">
      <Sidebar />
      <div className="app__dashboard-component">
        <div>
          <Card />
        </div>
        <div className="app__dashboard-right">
          <div className="app__dashboardItems">
            <p className="header-aag">
              Showing results for: <span>Past 24 hrs</span>
            </p>
            <div className="app__firstComponent">
              <h3>Transaction Value Breakdown</h3>
              <div className="app__dashboard-value">
                <div className="app__chart">
                  <ResponsiveContainer className="app__pichart">
                    <PieChart width={100} height={100}>
                      <Pie
                        data={data}
                        cx="30%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="app__dashboard-valueDetails">
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-one" />
                      </div>
                      <p>Successful Transactions</p>
                    </div>
                  </div>
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-two" />
                      </div>
                      <p>Decline Transactions</p>
                    </div>
                  </div>
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-three" />
                      </div>
                      <p>No Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__secondComponent">
              <div className="app__dashboard-cashier">
                <div className="cashier__tag">
                  <h3>Top Cashier</h3>
                  <AiFillStar />
                </div>

                <div className="cashier__comp">
                  <div className="app__cashier-One">
                    <FcBusinessman className="cashier__icon" />
                    <p> - </p>
                    <p> - </p>
                  </div>
                  <div className="app__cashier-two">
                    <p> - </p>
                    <p>Sold 0 items</p>
                    <p>Revenue of ₦0.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__firstComponent">
              <h3>Transaction Count Breakdown</h3>
              <div className="app__dashboard-value">
                <div className="app__chart">
                  <ResponsiveContainer className="app__pichart">
                    <PieChart width={100} height={100}>
                      <Pie
                        data={data}
                        cx="30%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="app__dashboard-valueDetails">
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-one" />
                      </div>
                      <p>Successful Transactions</p>
                    </div>
                  </div>
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-two" />
                      </div>
                      <p>Decline Transactions</p>
                    </div>
                  </div>
                  <div className="app__value-item">
                    <div className="value__item">
                      <div>
                        <div className="rectangle-shape-three" />
                      </div>
                      <p>No Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app__dashboard-left">
          <div className="app__left-items">
            <h3>How Customers Paid</h3>
            <div className="app__dashoardCard">
              <div>
                <p>TXNS</p>
                <p>0</p>
                <strong>₦0.00</strong>
              </div>
            </div>

            <div className="comp-second">
              <h3>Most Sold Product</h3>
              <div className="app__dashboard-cardItems">
                <div className="app__dashoard-card">
                  <div>
                    <p>-</p>
                    <p>0 Unit</p>
                    <small>Highes Quality</small>
                  </div>
                </div>
                <div className="app__dashoard-card">
                  <div>
                    <p>-</p>
                    <p>₦0.00</p>
                    <small>Highest Value</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__dashboard-topCustomers">
              <h3>Top Customers</h3>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
