import React from 'react'
import { useEffect, useState } from 'react'
import './DateViewer.css'

function DateViewer() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
        <div className='current-date'>{currentDate.toLocaleTimeString()}</div>
    </div>
  )
}

export default DateViewer