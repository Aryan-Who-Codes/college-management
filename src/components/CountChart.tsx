"use client";

import { Wallet } from 'lucide-react';
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Paid',
        count: 92,
        fill: '#6b1e3b',
    },
    {
        name: 'Pending',
        count: 14,
        fill: '#d4af37',
    }
];

const CountChart = () => {
    return (
        <div className='bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[400px] p-4 sm:p-6 md:p-5 lg:p-5 xl:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 relative overflow-hidden flex flex-col'>
            {/* BACKGROUND DECORATION */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-college-gold/5 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-college-primary/5 rounded-full translate-y-4 -translate-x-4 sm:translate-y-6 sm:-translate-x-6"></div>

            {/* TITLE */}
            <div className="flex justify-between items-center relative z-10 mb-3 sm:mb-4 md:mb-3 lg:mb-3 xl:mb-4 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-rose-800 to-rose-900 shadow-md">
                        <Wallet className="w-4 h-4 text-white" />
                    </div>
                    <h1 className='text-lg sm:text-xl md:text-lg lg:text-lg xl:text-xl font-bold text-college-gray-800'>Fee Status</h1>
                </div>
                <div className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer border border-amber-200/50">
                    <Image
                        src="/moreDark.png"
                        alt="info"
                        width={18}
                        height={18}
                        className="sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 opacity-70 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            {/* CHART */}
            <div className="relative flex-1 min-h-0 my-3 sm:my-4 md:my-3 lg:my-2 xl:my-4">
                <div className="w-full h-full min-h-[160px] sm:min-h-[180px] md:min-h-[170px] lg:min-h-[160px] xl:min-h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="90%" barSize={24} data={data}>
                            <RadialBar
                                background={{ fill: '#f5f1e8' }}
                                dataKey="count"
                                cornerRadius={16}
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 md:p-2.5 lg:p-2 xl:p-3'>
                    <Image src="/students.png" alt="attendance" width={50} height={50} className='sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-9 lg:h-9 xl:w-12 xl:h-12' />
                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-16 relative z-10 flex-shrink-0">
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-4 h-4 bg-[#6b1e3b] rounded-full shadow-md' />
                    <h1 className='font-bold text-college-gray-800 text-sm sm:text-base md:text-sm lg:text-sm xl:text-base text-center'>92</h1>
                    <h2 className='text-xs text-college-gray-600 text-center'>Paid (87%)</h2>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-4 h-4 bg-[#d4af37] rounded-full shadow-md' />
                    <h1 className='font-bold text-college-gray-800 text-sm sm:text-base md:text-sm lg:text-sm xl:text-base text-center'>92</h1>
                    <h2 className='text-xs text-college-gray-600 text-center'>Pending (13%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart