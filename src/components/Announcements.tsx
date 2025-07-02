import React from 'react'

const Announcements = () => {
    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-lg sm:text-xl font-semibold'>Announcements</h1>
                <span className='text-[10px] sm:text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-college-primary/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-sm sm:text-base font-medium'>Important Campus Update</h2>
                        <span className='text-[8px] sm:text-[10px] md:text-xs text-gray-400 bg-white rounded-md px-0.5 sm:px-1 py-0.5 sm:py-1 whitespace-nowrap'>2025-01-01</span>
                    </div>
                    <p className='text-xs sm:text-sm text-gray-400 mt-1'>Campus facilities will be closed for maintenance on January 15th. Please plan accordingly.</p>
                </div>
                <div className='bg-college-gold/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-sm sm:text-base font-medium'>Library Hours Extended</h2>
                        <span className='text-[8px] sm:text-[10px] md:text-xs text-gray-400 bg-white rounded-md px-0.5 sm:px-1 py-0.5 sm:py-1 whitespace-nowrap'>2025-01-01</span>
                    </div>
                    <p className='text-xs sm:text-sm text-gray-400 mt-1'>The university library will now remain open until midnight to accommodate student study schedules.</p>
                </div>
                <div className='bg-college-success/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-sm sm:text-base font-medium'>New Student Support Services</h2>
                        <span className='text-[8px] sm:text-[10px] md:text-xs text-gray-400 bg-white rounded-md px-0.5 sm:px-1 py-0.5 sm:py-1 whitespace-nowrap'>2025-01-01</span>
                    </div>
                    <p className='text-xs sm:text-sm text-gray-400 mt-1'>Additional mental health and academic counseling services are now available for all students.</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements