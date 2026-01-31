import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function FocusChart() {
  const data = [
    { day: "شنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "یکشنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "دوشنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "سه‌شنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "چهارشنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "پنجشنبه", value: Math.floor(Math.random() * 10) + 1 },
    { day: "جمعه", value: Math.floor(Math.random() * 10) + 1 },
  ];
  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            {/* <YAxis domain={[0, 10]} /> */}
            <Tooltip formatter={(value) => [` ${value} ساعت`]} />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FocusChart;
