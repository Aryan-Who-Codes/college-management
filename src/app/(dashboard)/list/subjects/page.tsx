import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, subjectsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

type Subject = {
    id: number;
    name: string;
    teachers: string[];
};

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const SubjectListPage = () => {
    const renderRow = (item: Subject) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-college-cream-accent/30"
        >
            <td className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-red-400/70 to-purple-500 flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                    {item.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm truncate">{item.name}</h3>
                    <p title={item.teachers.join(", ")} className="md:hidden text-xs text-gray-500 truncate">
                        {item.teachers.join(", ")}
                    </p>
                </div>
            </td>
            <td className="hidden md:table-cell p-2 sm:p-4 text-xs sm:text-sm max-w-[120px] lg:max-w-none">
                <div className="truncate" title={item.teachers.join(", ")}>
                    {item.teachers.join(", ")}
                </div>
            </td>
            <td className="p-2 sm:p-4">
                <div className="flex items-center gap-1 sm:gap-2">
                    {role === "admin" && (
                        <>
                            <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#fbd56b] cursor-pointer">
                                <Image src="/edit.png" alt="edit" width={14} height={14} className="sm:w-4 sm:h-4" />
                            </button>
                            <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#f1bdca] cursor-pointer">
                                <Image src="/delete.png" alt="" width={14} height={14} className="sm:w-4 sm:h-4" />
                            </button>
                        </>

                        // <FormModal table="subject" type="update" data={item} />
                        // <FormModal table="subject" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-2 sm:p-4 h-full flex flex-col min-h-0">

            {/* TOP */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
                <h1 className='text-base sm:text-lg font-semibold'>All Subjects</h1>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <div className="w-full sm:w-auto">
                        <TableSearch />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 justify-end sm:justify-start">
                        <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-college-gold cursor-pointer hover:bg-college-gold/80 transition-colors">
                            <Image src="/filter.png" alt="filter" width={12} height={12} className="sm:w-3.5 sm:h-3.5" />
                        </button>
                        <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-college-gold cursor-pointer hover:bg-college-gold/80 transition-colors">
                            <Image src="/sort.png" alt="sort" width={12} height={12} className="sm:w-3.5 sm:h-3.5" />
                        </button>
                        {role === "admin" && (
                            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-college-gold cursor-pointer hover:bg-college-gold/80 transition-colors">
                                <Image src="/plus.png" alt="add" width={12} height={12} className="sm:w-3.5 sm:h-3.5" />
                            </button>
                            // <FormModal table="subject" type="create" />
                        )}
                    </div>
                </div>
            </div>

            {/* LIST - Scrollable container */}
            <div className="flex-1 overflow-auto min-h-0 mt-3 sm:mt-4">
                <div className="min-w-full overflow-x-auto">
                    <Table columns={columns} renderRow={renderRow} data={subjectsData} />
                </div>
            </div>

            {/* PAGINATION */}
            <div className="flex-shrink-0 mt-2 sm:mt-4">
                <Pagination />
            </div>

        </div>
    )
}

export default SubjectListPage