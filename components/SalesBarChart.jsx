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

const sales = [
  { year: "2023", month: "Jan", sales: 5700, profit: 5000 },
  { year: "2023", month: "Feb", sales: 2700, profit: 2000 },
  { year: "2023", month: "Mar", sales: 3700, profit: 3000 },
  { year: "2023", month: "Apr", sales: 1700, profit: 2000 },
  { year: "2023", month: "May", sales: 4700, profit: 1000 },
  { year: "2023", month: "Jun", sales: 5700, profit: 4000 },
  { year: "2023", month: "Jul", sales: 6700, profit: 3000 },
  { year: "2023", month: "Aug", sales: 7700, profit: 2000 },
  { year: "2023", month: "Sep", sales: 6700, profit: 5000 },
  { year: "2023", month: "Oct", sales: 5700, profit: 4000 },
  { year: "2023", month: "Nov", sales: 4700, profit: 5000 },
  { year: "2023", month: "Dec", sales: 5700, profit: 3000 },
];
const SalesBarChart = () => {
  return (
    <BarChart
      width={500}
      height={500}
      data={sales}
      className="mx-auto bg-primary mb-8"
    >
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
  );
};
export default SalesBarChart;
