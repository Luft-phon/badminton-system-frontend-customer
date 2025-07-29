import "../../../css/Calender.css"
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useState } from "react";
import { Tooltip } from "@radix-ui/themes";

function Calender() {

    const [courts, setCourts] = useState([]);
    const [events, setEvents] = useState([]);

    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        fetch("https://localhost:7087/api/Court/getCourts", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => {
                if (!res.ok) throw new Error("No Courts")
                return res.json()
            })
            .then(data => {
                console.log(data.data)
                if (data.data == null) throw new Error("No Booking")
                const mappedCourt = data?.data?.map((court) => ({                   // chuyển đổi field bên api thành field bên frontend
                    id: court.courtID,
                    title: court.courtName
                }));
                setCourts(mappedCourt);

               const mappedEvent = data?.data?.flatMap(courts =>            // .flatMap: làm phẳng từ mảng trong mảng thành 1 mảng duy nhất
                    courts.booking.map(b => ({
                        id: b.bookingID,
                        resourceId: courts.courtID,
                        title: `${b.startTime.slice(11,16)} - ${b.endTime.slice(11,16)}`,
                         start: b.startTime,
                         end: b.endTime
                })));
                setEvents(mappedEvent)
            })
    }, []);
    const renderEventContent = (eventInfo) => {
        return (
            <div
                data-tooltip-id={`tooltip-${eventInfo.event.id}`}
                data-tooltip-content={`Cannot book this slot`}
            >
                {eventInfo.event.title}
                <Tooltip id={`tooltip-${eventInfo.event.id}`} place="top" />
            </div>
        );
    };
    return (
        <div style={{ overflowX: 'auto' }}>
            <FullCalendar
                plugins={[resourceTimeGridPlugin, scrollGridPlugin, interactionPlugin]}
                initialView="resourceTimeGridDay"
                slotMinTime="08:00:00"
                slotMaxTime="22:00:00"
                dayMinWidth={150}
                height="auto"
                allDaySlot={false}
                editable={false}
                selectable={true}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'resourceTimeGridDay,timeGridWeek,timeGridDay'
                }}

                resources={courts}
                events={events}
                eventContent={renderEventContent}
            />
        </div>
    )
}

export default Calender