"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SalesBarChart = ({ newSales }) => {
  const {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  } = newSales;
  const sales = [
    { year: "2023", month: "Jan", sales: january, profit: january * 0.8 },
    { year: "2023", month: "Feb", sales: february, profit: february * 0.8 },
    { year: "2023", month: "Mar", sales: march, profit: march * 0.8 },
    { year: "2023", month: "Apr", sales: april, profit: april * 0.8 },
    { year: "2023", month: "May", sales: may, profit: may * 0.8 },
    { year: "2023", month: "Jun", sales: june, profit: june * 0.8 },
    { year: "2023", month: "Jul", sales: july, profit: july * 0.8 },
    { year: "2023", month: "Aug", sales: august, profit: august * 0.8 },
    { year: "2023", month: "Sep", sales: september, profit: september * 0.8 },
    { year: "2023", month: "Oct", sales: october, profit: october * 0.8 },
    { year: "2023", month: "Nov", sales: november, profit: november * 0.8 },
    { year: "2023", month: "Dec", sales: december, profit: december * 0.8 },
  ];
  const options = {
    style: "decimal", // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const totalProfit = sales
    .reduce((acc, obj) => acc + obj.profit, 0)
    .toLocaleString("en-US", options);
  return (
    <div>
      <div className="card w-96 shadow-xl bg-primary mx-auto mb-8 border-8 border-secondary">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-neutral">Total Profit</h2>
          <p className="text-center text-3xl text-accent">${totalProfit}</p>
        </div>
      </div>
      <ResponsiveContainer width="80%" height={500}>
        <BarChart data={sales} className="mx-auto bg-primary mb-8">
          <YAxis tick={{ fill: "#B7DBEB" }} tickLine={{ stroke: "#B7DBEB" }} />
          <XAxis
            dataKey="month"
            tick={{ fill: "#B7DBEB" }}
            tickLine={{ stroke: "#B7DBEB" }}
            angle={-90}
            dy={15}
            dx={-5}
          />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: "10px" }} />
          <Bar dataKey="sales" stroke="#B7DBEB" fill="#B7DBEB" />
          <Bar dataKey="profit" stroke="#FFC857" fill="#FFC857" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SalesBarChart;
