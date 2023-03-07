import React from 'react'
import Timer from './Timer'
import './TimerGroup.css'

function TimerGroup() {
    const times = [3, 5, 7, 8, 10, 15, 20, 25, 30, 35, 45, 60]

    const [currentTimerTime, setCurrentTimerTime] = React.useState(3)
    const [isOn, setIsOn] = React.useState(false)
    const [description, setDescription] = React.useState("testing")

    function on_click(i){
        console.log(i)
        setCurrentTimerTime(i*60)
        setIsOn(true)
        console.log(currentTimerTime)
        setDescription(`${i} minutes`)
    }

  return (
    <div className='timer-group-container'>
        <div className='clock-timer'>
            <Timer time={currentTimerTime} initial_time={currentTimerTime} isOn={isOn} description={description} />
        </div>
        <div className="timer-group-time-list">
            {times.map((time) => (
                <div key={time} className='time-item' onClick={()=>{on_click(time)}}>{time} min</div>
            ))}
        </div>
        
        
    </div>
  )
}

export default TimerGroup