"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

const data = [
    { name: 'Jan', collected: 53000 },
    { name: 'Feb', collected: 61000 },
    { name: 'Mar', collected: 58000 },
    { name: 'Apr', collected: 65000 },
    { name: 'May', collected: 60000 },
    { name: 'Jun', collected: 62000 },
    { name: 'Jul', collected: 63000 },
    { name: 'Aug', collected: 65000 },
    { name: 'Sep', collected: 60000 },
    { name: 'Oct', collected: 62000 },
    { name: 'Nov', collected: 63000 },
    { name: 'Dec', collected: 65000 },
];

const MonthlyFeeChart = () => {
    const totalCollected = data.reduce((sum, month) => sum + month.collected, 0);
    const averageMonthly = Math.round(totalCollected / data.length);
    const maxMonth = data.reduce((max, month) => month.collected > max.collected ? month : max, data[0]);

    return (
        <div className='bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl w-full h-full p-4 sm:p-6 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 relative overflow-hidden'>
            {/* BACKGROUND DECORATION */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-college-gold/5 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-college-primary/5 rounded-full translate-y-6 -translate-x-6"></div>

            {/* TITLE */}
            <div className="flex justify-between items-center relative z-10 mb-4 md:mb-3 lg:mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-rose-800 to-rose-900 shadow-md">
                        <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h1 className='text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-gray-800'>Monthly Fee Collection</h1>
                </div>
                <div className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer border border-amber-200/50">
                    <Image
                        src="/moreDark.png"
                        alt="info"
                        width={18}
                        height={18}
                        className="sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 opacity-70 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            {/* STATS ROW */}
            <div className="flex justify-between items-center mb-6 md:mb-4 lg:mb-6 relative z-10">
                <div className="flex gap-6 md:gap-4 lg:gap-6">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Total</p>
                        <p className="text-lg md:text-base lg:text-lg font-bold text-gray-800">₹{(totalCollected / 100000).toFixed(1)}L</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Average</p>
                        <p className="text-lg md:text-base lg:text-lg font-bold text-gray-800">₹{(averageMonthly / 1000).toFixed(0)}k</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Peak Month</p>
                        <p className="text-lg md:text-base lg:text-lg font-bold text-rose-800">{maxMonth.name}</p>
                    </div>
                </div>
            </div>

            {/* CHART */}
            <div className="relative w-full h-[65%] sm:h-[70%] md:h-[72%] lg:h-[75%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barSize={18}
                        margin={{
                            top: 20,
                            right: 10,
                            left: 10,
                            bottom: 20
                        }}
                    >
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#881337" stopOpacity={0.9} />
                                <stop offset="100%" stopColor="#be185d" stopOpacity={0.7} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="2 4"
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
                            axisLine={false}
                            tick={{
                                fill: "#6b7280",
                                fontSize: 11
                            }}
                            tickLine={false}
                            tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                            width={45}
                        />
                        <Tooltip
                            formatter={(value) => [`₹${value.toLocaleString()}`, 'Collected']}
                            labelFormatter={(label) => `Month: ${label}`}
                            contentStyle={{
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                fontSize: '12px',
                                fontWeight: '500'
                            }}
                            cursor={{ fill: 'rgba(107, 30, 59, 0.05)' }}
                        />
                        <Legend
                            align='left'
                            verticalAlign='top'
                            wrapperStyle={{
                                paddingTop: '0px',
                                paddingBottom: '15px',
                                fontSize: '12px',
                                fontWeight: '600'
                            }}
                            iconType="circle"
                        />
                        <Bar
                            dataKey="collected"
                            fill="url(#barGradient)"
                            legendType='circle'
                            radius={[6, 6, 0, 0]}
                            name="Fee Collection"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MonthlyFeeChart;