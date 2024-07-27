import React from 'react'

function MyDateCellWrapper(props) {
  const dayOfWeek = props.value.getDay()
  if (dayOfWeek === 4) {
    return (
      <div>
        faraz
        {props.children}
      </div>
    )
  } else {
    return null
  }
}

export default MyDateCellWrapper
