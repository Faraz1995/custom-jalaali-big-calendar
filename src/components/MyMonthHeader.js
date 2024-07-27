import React from 'react'

function MyMonthHeader(props) {
  const dayOfWeek = props.date.getDay()
  const style = {
    color: dayOfWeek === 5 ? 'red' : dayOfWeek ===4 ?"#FFA423":'black'
  }
  return <div style={style}>{props.label}
  {dayOfWeek ===4 ? 
  <span>
  {' '}نیمه کاری {' '}
  </span > :''}
  </div>
}

export default MyMonthHeader
