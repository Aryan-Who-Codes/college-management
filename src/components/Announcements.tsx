import React from 'react'

const Announcements = () => {
    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-college-primary/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem, ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='bg-college-gold/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem, ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='bg-college-success/10 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem, ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>  
            </div>
        </div>
    )
}

export default Announcements