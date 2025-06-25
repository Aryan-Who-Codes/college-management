"use client";

import MonthlyFeeChart from "@/components/MonthlyFeeChart"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import PendingDuesChart from "@/components/PendingVsPaidChart"
import dynamic from 'next/dynamic';
import Announcements from "@/components/Announcements";

// Remove this line - you don't need the regular import anymore
// import EventCalender from "@/components/EventCalender"

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
    <div className="p-4 flex gap-4 flex-col md:flex-row">

      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">

        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">

          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <MonthlyFeeChart />
          </div>

        </div>

        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <PendingDuesChart />
        </div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default AdminPage