"use client";

import MonthlyFeeChart from "@/components/MonthlyFeeChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import PendingDuesChart from "@/components/PendingVsPaidChart"
import dynamic from 'next/dynamic';
import Announcements from "@/components/Announcements";

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

const AdminPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row">

      {/* LEFT - Main content area */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6 lg:gap-8">

        {/* USER CARDS - Better responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 lg:gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHARTS - Responsive heights and layout */}
        <div className="flex gap-4 flex-col lg:flex-row">

          {/* COUNT CHART - More flexible sizing */}
          <div className="w-full lg:w-1/3 xl:w-1/3">
            <div className="h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[520px] 2xl:h-[580px]">
              <CountChart />
            </div>
          </div>

          {/* MONTHLY FEE CHART - Responsive height */}
          <div className="w-full lg:w-2/3 xl:w-2/3">
            <div className="h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[520px] 2xl:h-[580px]">
              <MonthlyFeeChart />
            </div>
          </div>

        </div>

        {/* BOTTOM CHART - Responsive height */}
        <div className="w-full">
          <div className="h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[480px] 2xl:h-[520px]">
            <PendingDuesChart />
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

export default AdminPage