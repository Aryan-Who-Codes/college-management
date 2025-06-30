"use client";

import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar";
import dynamic from "next/dynamic";
import "react-big-calendar/lib/css/react-big-calendar.css";

const EventCalendar = dynamic(() => import('@/components/EventCalender'), {
  ssr: false,
  loading: () => (
    <div className="bg-white p-4 rounded-md">
      <div className="h-64 flex items-center justify-center">
        Loading calendar...
      </div>
    </div>
  )
});

const ParentPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row">
      {/* LEFT - Main content area */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6 lg:gap-8">
        {/* Big Calendar - Parent Schedule with height matching sidebar */}
        <div className="w-full h-full">
          <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 h-full flex flex-col">
            <h1 className="text-xl font-semibold mb-4">Schedule (John Doe)</h1>
            <div className="flex-1 mb:min-h-[500px] min-h-[400px]">
              <BigCalendar />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - Sidebar content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6 lg:gap-8">
        {/* Calendar - Responsive height */}
          <div className="min-h-[300px] lg:min-h-[350px] xl:min-h-[420px]">
            <EventCalendar />
          </div>

        {/* Announcements */}
        <div className="flex-1">
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default ParentPage