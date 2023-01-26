import React from 'react'
import Timer from './Timer'
import './TimerGroup.css'

function TimerGroup() {
    const times = [3, 5, 7, 8, 10, 15, 20, 25, 30, 35, 45, 60]

    const [currentTimerTime, setCurrentTimerTime] = React.useState(50)
    const [isOn, setIsOn] = React.useState(false)

    function on_click(i){
        console.log(i)
        setCurrentTimerTime(i*60)
        setIsOn(true)
        console.log(currentTimerTime)
    }

  return (
    <div className='timer-group-container'>
        <h1>Timer</h1>
        <div className='clock-timer'>
            <Timer time={currentTimerTime} initial_time={currentTimerTime} isOn={isOn} description="testing" />
        </div>
        <div className="timer-group-time-list">
            {times.map((time) => (
                <div key={time} className='time-item' onClick={()=>{on_click(time)}}>{time} minutes</div>
            ))}
        </div>
        
        
    </div>
  )
}

export default TimerGroup