"use client";

import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
// import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
// import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row">
      {/* LEFT - Main content area */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6 lg:gap-8">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 py-6 px-4 flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Profile picture"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                {/* {role === "admin" && <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />} */}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 flex gap-4 w-full md:w-[48%] lg:w-full xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="Attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 flex gap-4 w-full md:w-[48%] lg:w-full xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="Branch"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 flex gap-4 w-full md:w-[48%] lg:w-full xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="Lesson"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 flex gap-4 w-full md:w-[48%] lg:w-full xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="Class"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* TEACHER'S SCHEDULE - Big Calendar with responsive height */}
        <div className="w-full h-full">
          <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 h-full flex flex-col">
            <h1 className="text-xl font-semibold mb-4">Teacher&apos;s Schedule</h1>
            <div className="flex-1 mb:min-h-[500px] min-h-[400px]">
              <BigCalendar />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - Sidebar content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6 lg:gap-8">
        {/* SHORTCUTS */}
        <div className="bg-gradient-to-br from-white to-college-cream-light rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-college-cream-dark/20 p-4 xl:p-5 2xl:p-6.5">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-college-primary-100" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-college-gold-100" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-emerald-100" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-college-gray-200" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-college-cream-dark" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>

        {/* Performance */}
        <div className="flex-1">
          <Performance />
        </div>

        {/* Announcements */}
        <div className="flex-1">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default SingleTeacherPage;