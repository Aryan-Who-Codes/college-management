import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
};

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Teacher ID",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const TeacherListPage = () => {
    const renderRow = (item: Teacher) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-college-cream-accent/30"
        >
            <td className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 min-w-0">
                <Image
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="md:hidden xl:block w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell p-2 sm:p-4 text-xs sm:text-sm">{item.teacherId}</td>
            <td className="hidden md:table-cell p-2 sm:p-4 text-xs sm:text-sm max-w-[120px] lg:max-w-none">
                <div className="truncate" title={item.subjects.join(", ")}>
                    {item.subjects.join(", ")}
                </div>
            </td>
            <td className="hidden md:table-cell p-2 sm:p-4 text-xs sm:text-sm max-w-[100px] lg:max-w-none">
                <div className="truncate" title={item.classes.join(", ")}>
                    {item.classes.join(", ")}
                </div>
            </td>
            <td className="hidden lg:table-cell p-2 sm:p-4 text-xs sm:text-sm">{item.phone}</td>
            <td className="hidden lg:table-cell p-2 sm:p-4 text-xs sm:text-sm max-w-[150px] xl:max-w-none">
                <div className="truncate" title={item.address}>
                    {item.address}
                </div>
            </td>
            <td className="p-2 sm:p-4">
                <div className="flex items-center gap-1 sm:gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#fbd56b] cursor-pointer">
                            <Image src="/view.png" alt="" width={14} height={14} className="sm:w-4 sm:h-4" />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#f1bdca] cursor-pointer">
                            <Image src="/delete.png" alt="" width={14} height={14} className="sm:w-4 sm:h-4" />
                        </button>
                        // <FormModal table="teacher" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-2 sm:p-4 h-full flex flex-col min-h-0">

            {/* TOP */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
                <h1 className='text-base sm:text-lg font-semibold'>All Teachers</h1>
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
                        )}
                    </div>
                </div>
            </div>

            {/* LIST - Scrollable container */}
            <div className="flex-1 overflow-auto min-h-0 mt-3 sm:mt-4">
                <div className="min-w-full overflow-x-auto">
                    <Table columns={columns} renderRow={renderRow} data={teachersData} />
                </div>
            </div>

            {/* PAGINATION */}
            <div className="flex-shrink-0 mt-2 sm:mt-4">
                <Pagination />
            </div>

        </div>
    )
}

export default TeacherListPage