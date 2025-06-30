import React from 'react';

const Table = ({
    columns,
    renderRow,
    data,
}: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
}) => {
    return (
        <div className="w-full">
            <table className="w-full min-w-max">
                <thead>
                    <tr className="text-left text-gray-500 text-xs sm:text-sm border-b border-gray-200">
                        {columns.map((col) => (
                            <th 
                                key={col.accessor} 
                                className={`pb-2 sm:pb-3 px-2 sm:px-4 font-medium ${col.className || ''}`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => renderRow(item))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;