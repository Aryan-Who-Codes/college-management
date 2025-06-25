"use client";

import { AlertCircle } from "lucide-react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "I Year-BA", pending: 12500, paid: 37500 },
  { name: "II Year-BA", pending: 9800, paid: 40200 },
  { name: "III Year-BA", pending: 7400, paid: 42600 },
  { name: "VI Year-BA", pending: 6800, paid: 37200 },
  { name: "V Year-BA", pending: 5100, paid: 29900 },
  { name: "I Year-A", pending: 12500, paid: 37500 },
  { name: "I Year-B", pending: 9800, paid: 40200 },
  { name: "II Year-A", pending: 7400, paid: 42600 },
  { name: "II Year-B", pending: 6800, paid: 37200 },
  { name: "II Year-C", pending: 5100, paid: 29900 },];

const PendingVsPaidChart = () => {
  return (
    <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl w-full h-full p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-college-gold/5 rounded-full -translate-y-8 translate-x-8"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-college-primary/5 rounded-full translate-y-6 -translate-x-6"></div>

      {/* Header */}
      <div className="flex justify-between items-center relative z-10 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-br from-rose-800 to-rose-900 shadow-md">
            <AlertCircle className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            Dues Comparison by Class
          </h1>
        </div>
        <div className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer border border-amber-200/50">
          <Image
            src="/moreDark.png"
            alt="info"
            width={18}
            height={18}
            className="sm:w-5 sm:h-5 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full h-[85%] sm:h-[90%] md:h-[95%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
              strokeOpacity={0.6}
            />
            <XAxis
              dataKey="name"
              tick={{
                fill: "#6b7280",
                fontSize: 10,
                fontWeight: 500
              }}
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
              interval={0}
            />
            <YAxis
              tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
              tick={{
                fill: "#6b7280",
                fontSize: 11
              }}
              axisLine={false}
              tickLine={false}
              width={45}
            />
            <Tooltip
              formatter={(value) => `₹${value.toLocaleString()}`}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                fontSize: "12px",
                fontWeight: "500",
              }}
              cursor={{ fill: "rgba(107, 30, 59, 0.05)" }}
            />
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                paddingBottom: "15px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            />
            <Line type="monotone" dataKey="pending" stroke="#be123c" strokeWidth={4} name="Pending Dues" />
            <Line type="monotone" dataKey="paid" stroke="#059669" strokeWidth={4} name="Paid Dues" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PendingVsPaidChart;
