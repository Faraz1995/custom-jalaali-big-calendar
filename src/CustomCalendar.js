import React, { useMemo, useState } from 'react'
import { Calendar, Navigate, momentLocalizer } from 'react-big-calendar-shamsi'
import moment from 'moment-jalaali'
import 'react-big-calendar-shamsi/lib/css/react-big-calendar.css'
import styles from './toolbar.module.css'
import initialEvents from './events'
import MyMonthDateHeader from './components/MyMonthDateHeader'
import MyMonthHeader from './components/MyMonthHeader'
import MyMonthEvent from './components/MyMonthEvent'
const pMoment = moment
pMoment.loadPersian({ dialect: 'persian-modern' })

function CustomCalendar() {
  const [events, setEvents] = useState(initialEvents)


  const configs = useMemo(
    () => ({
      messages: {
        date: 'تاریخ',
        time: 'زمان',
        event: 'رویداد',
        agenda: 'رویداد ها',
        noEventsInRange: 'رویدادی در این بازه وجود ندارد',
        allDay: 'تمام روز',
        day: 'روز',
        week: 'هفته',
        work_week: 'هفته کاری',
        month: 'ماه',
        previous: 'قبلی',
        next: 'بعدی',
        today: 'امروز',
        yesterday: 'دیروز',
        tomorrow: 'فردا'
      },
      views: ['month'],
      rtl: true,
      localizer: momentLocalizer(pMoment)
    }),
    []
  )

  const { localizer } = configs
  const newLocalizer = {
    ...localizer,
    formats: {
      ...localizer.formats,
      agendaDateFormat: 'ddd jDD jMMM',
      dateFormat: 'jDD',
      dayFormat: 'jDD ddd',
      dayHeaderFormat: 'dddd jDD jMMM',
      monthHeaderFormat: 'jMMMM jYYYY',
      weekdayFormat: 'ddd'
    }
  }

  const handleSlotSelect = (e) => {
    setEvents((prev) => {
      return [
        ...prev,
        {
          id: prev[prev.length-1].id+1,
          type: 'customize',
          title: 'faraz',
          start: e.start,
          end: e.end
        }
      ]
    })
  }
  console.log('eventsssssss',events);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      borderRadius: '5px',
      padding: '2px',
      width: 'max-content',
      maxWidth: '70%',
      textAlign: 'right',
      marginTop: '5px'
    }
    switch (event.type) {
      case 'holiday':
        style.backgroundColor = 'rgba(255, 41, 13,0.1)'
        style.border = '1px solid #ff290d'
        style.color = '#FF8373'
        break
      case 'customize':
        style.backgroundColor = 'rgba(0, 133, 255,0.1)'
        style.color = '#0085FF'
        style.border = '1px solid #0085FF'
        break
      default:
        break
    }

    return {
      style: style
    }
  }

  const eventClickHandler = (e) =>{
    console.log('eventtttttttttt',e);
    setEvents(prev=>prev.filter(item=>item.id!==e.id))
  }

  return (
    <div className='height600'>
      <Calendar
        selectable={true}
        step={60}
        localizer={newLocalizer}
        culture={'fa'}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 700 }}
        formats={configs.formats}
        views={['month']}
        rtl={configs.rtl}
        useJalaali={true}
        events={events}
        onSelectSlot={handleSlotSelect}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={eventClickHandler}
        popup={false}
        onShowMore={(e)=>console.log('show more*****',e)}
        messages={{
              showMore: total => (
                <div
                  style={{ cursor: 'pointer' }}
                  onMouseOver={e => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >{`+${total} بیشتر`}
                </div>
              ),
            }}
        components={{
          toolbar: Toolbar,
          event: MyMonthEvent,
          month: {
            header: MyMonthHeader,
            dateHeader: MyMonthDateHeader,
            event: MyMonthEvent
          }
        }}
      />
    </div>
  )
}

function Toolbar(props) {
  const prevHandler = () => {
    props.onNavigate(Navigate.PREVIOUS)
  }
  const nextHandler = () => {
    props.onNavigate(Navigate.NEXT)
  }

  return (
    <div className={styles.toolbar}>
      <button className={styles.prevButton} onClick={prevHandler}>
        &#8249;
      </button>
      <button
        className={styles.toolbarTitle}
        onClick={() => props.onNavigate(Navigate.TODAY)}
      >
        {moment(props.date).format('jMMMM-jYYYY')}
      </button>
      <button className={styles.nextButton} onClick={nextHandler}>
        &#8250;
      </button>
    </div>
  )
}

export default CustomCalendar
