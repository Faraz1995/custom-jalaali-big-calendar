import React from 'react'

function MyDayEvent(props) {
  console.log('day**********', props)
  return <div>MyDayEvent {props.label}</div>
}

export default MyDayEvent
