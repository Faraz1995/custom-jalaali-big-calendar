import React from 'react'
import events from './events'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment-jalaali'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import MyMonthEvent from './components/MyMonthEvent'
import MyMonthDateHeader from './components/MyMonthDateHeader'

const localizer = momentLocalizer(moment)

function RBCalendar() {
  return (
    <div>
      <h1>react big calendar</h1>
      <Calendar
        localizer={localizer}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        events={events}
        step={60}
        views={['month']}
        // defaultDate={new Date(2015, 3, 1)}
        popup={false}
        onShowMore={(events, date) => this.setState({ showModal: true, events })}
        components={{
          event: MyMonthEvent,
          month: {
            dateHeader: MyMonthDateHeader,
            event: MyMonthEvent
          }
        }}
      />
    </div>
  )
}

export default RBCalendar
