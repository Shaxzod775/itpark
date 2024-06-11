import { Calendar } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function AttendanceCalendar() {
  return (
    <Calendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  )
}