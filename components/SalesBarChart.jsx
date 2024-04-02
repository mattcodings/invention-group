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
    <BarChart width={500} height={400} data={sales}>
      <YAxis />
      <XAxis dataKey="month" />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" stroke="#00ff00" fill="#0000ff" />
      <Bar dataKey="profit" stroke="#ff0000" fill="#ff00ff" />
    </BarChart>
  );
};
export default SalesBarChart;
