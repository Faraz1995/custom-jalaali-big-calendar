import React from 'react'
import styles from './components.module.css'
function MyMonthDateHeader(props) {
  const dayOfWeek = props.date.getDay()
  const style = {
    color: dayOfWeek === 5 ? 'red' : dayOfWeek ===4 ?"#FFA423":'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
  return (
    <div style={style}>
      {props.label}
      {/* {dayOfWeek === 4 && (
        <div className={styles.dateHeaderContainer}>
          <p>روز نیمه کاری</p>
        </div>
      )} */}
    </div>
  )
}

export default MyMonthDateHeader
