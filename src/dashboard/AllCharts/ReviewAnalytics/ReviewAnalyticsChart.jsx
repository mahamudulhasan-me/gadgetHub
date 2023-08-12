import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", sales: 800, revenue: 400, profit: 200 },
  { name: "Feb", sales: 900, revenue: 500, profit: 500 },
  { name: "Mar", sales: 800, revenue: 600, profit: 900 },
  { name: "Apr", sales: 1000, revenue: 1000, profit: 1000 },
  { name: "May", sales: 1200, revenue: 1100, profit: 1100 },
  { name: "Jun", sales: 1500, revenue: 1200, profit: 1250 },
  { name: "Jul", sales: 1800, revenue: 1560, profit: 1400 },
  { name: "Aug", sales: 2000, revenue: 1600, profit: 1500 },
  { name: "Sep", sales: 500, revenue: 860, profit: 1400 },
  { name: "Oct", sales: 1600, revenue: 1520, profit: 1300 },
  { name: "Nov", sales: 1200, revenue: 1240, profit: 1100 },
  { name: "Dec", sales: 1800, revenue: 1360, profit: 900 },
];

export default function ReviewAnalyticsChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="sales"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="profit" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
