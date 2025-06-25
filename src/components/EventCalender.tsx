'use client';

import { Calendar } from 'react-calendar';
import Image from 'next/image';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: 'Event 1',
        time: "12:00 PM - 2:00 PM",
        description: 'Description for Event 1',
    },
    {
        id: 2,
        title: 'Event 2',
        time: "3:00 PM - 5:00 PM",
        description: 'Description for Event 2',
    },
    {
        id: 3,
        title: 'Event 3',
        time: "6:00 PM - 8:00 PM",
        description: 'Description for Event 3',
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4">
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src="/moreDark.png" alt="calendar" width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
              {events.map((event) => (
                    <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-college-primary even:border-t-college-gold">

                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                            <span className='text-gray-300 text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
