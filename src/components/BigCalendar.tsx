"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WEEK);

    return (
        <div className="h-full w-full min-h-[400px] relative">
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["week", "work_week", "day"]}
                view={view}
                style={{ height: "100%" }}
                onView={setView}
                min={new Date(2025, 1, 0, 8, 0)}
                max={new Date(2025, 1, 0, 17, 0)}
                step={30} // 30-minute intervals for better mobile viewing
                timeslots={2} // Show 2 time slots per step
                dayLayoutAlgorithm="no-overlap" // Better event positioning
                showMultiDayTimes={true}
                popup={false} // Disable popup for better mobile experience
                tooltipAccessor={null} // Disable tooltips on mobile

            />
        </div>
    );
};

export default BigCalendar;