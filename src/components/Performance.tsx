"use client";

import { Award } from "lucide-react";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 92, fill: "#6b1e3b" },
    { name: "Group B", value: 8, fill: "#d4af37" },
];

const Performance = () => {
    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl w-full h-full min-h-[320px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] xl:min-h-[420px] p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 relative overflow-hidden">
            
            {/* BACKGROUND DECORATION */}
            <div className="absolute top-0 right-0 w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 bg-college-gold/5 rounded-full -translate-y-4 translate-x-4 xs:-translate-y-5 xs:translate-x-5 sm:-translate-y-6 sm:translate-x-6 md:-translate-y-7 md:translate-x-7 lg:-translate-y-8 lg:translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-college-primary/5 rounded-full translate-y-3 -translate-x-3 xs:translate-y-4 xs:-translate-x-4 sm:translate-y-5 sm:-translate-x-5 md:translate-y-6 md:-translate-x-6"></div>
            
            {/* HEADER SECTION */}
            <div className="flex justify-between items-center relative z-20 mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-3.5">
                    <div className="p-1.5 xs:p-2 sm:p-2.5 rounded-full bg-gradient-to-br from-rose-800 to-rose-900 shadow-md flex-shrink-0">
                        <Award className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <h1 className='text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-college-gray-800 leading-tight'>
                        Performance
                    </h1>
                </div>
                <div className="p-1.5 xs:p-2 sm:p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer border border-amber-200/50 flex-shrink-0">
                    <Image
                        src="/moreDark.png"
                        alt="info"
                        width={16}
                        height={16}
                        className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
            
            {/* CHART CONTAINER */}
            <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-center">
                {/* Chart wrapper with proper aspect ratio */}
                <div className="relative w-full h-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] mx-auto">
                    <div className="w-full aspect-square relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="45%"
                                    outerRadius="80%"
                                    fill="#8884d8"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    
                    {/* CENTER CONTENT - Score Display */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
                        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-college-gray-800 leading-none mb-1">
                            9.2
                        </h1>
                        <p className="text-xs xs:text-xs sm:text-sm md:text-sm text-gray-500 leading-tight whitespace-nowrap">
                            Maximum Achievable Score: 10
                        </p>
                    </div>
                </div>
            </div>
            
            {/* BOTTOM LABEL */}
            <div className="relative z-10 mt-4 sm:mt-5 md:mt-6">
                <h2 className="font-medium text-center text-sm xs:text-sm sm:text-base md:text-base lg:text-lg text-college-gray-700 leading-tight px-2">
                    1st Semester - 2nd Semester
                </h2>
            </div>
        </div>
    );
};

export default Performance;