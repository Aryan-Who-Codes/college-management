import React from 'react';

const Pagination = () => {
    return (
        <div className="p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-gray-500 border-t border-gray-100">
            {/* Mobile Layout */}
            <div className="flex sm:hidden items-center justify-between w-full">
                <button
                    disabled
                    className="py-2 px-3 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Prev
                </button>

                <div className="flex items-center gap-1 text-xs">
                    <span>Page</span>
                    <button className="px-2 py-1 rounded-sm bg-college-primary-100 font-semibold">1</button>
                    <span>of 10</span>
                </div>

                <button className="py-2 px-3 rounded-md bg-slate-200 text-xs font-semibold">
                    Next
                </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between w-full">
                <button
                    disabled
                    className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 transition-colors"
                >
                    Prev
                </button>

                <div className="flex items-center gap-1 sm:gap-2 text-sm">
                    <button className="px-2 sm:px-3 py-1 rounded-sm bg-college-primary-100 hover:bg-college-primary-200 transition-colors">1</button>
                    <button className="px-2 sm:px-3 py-1 rounded-sm hover:bg-gray-100 transition-colors">2</button>
                    <button className="px-2 sm:px-3 py-1 rounded-sm hover:bg-gray-100 transition-colors">3</button>
                    <span className="px-1">...</span>
                    <button className="px-2 sm:px-3 py-1 rounded-sm hover:bg-gray-100 transition-colors">10</button>
                </div>

                <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold hover:bg-slate-300 transition-colors">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;