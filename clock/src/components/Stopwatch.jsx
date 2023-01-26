import React, {useEffect, useRef} from "react";
import "./Stopwatch.css"
import {format} from "./utils";


const Stopwatch = (props) => {
    const [time, setTime] = React.useState(props.time);
    const [isOn, setIsOn] = React.useState(props.isOn);
    const [isRinging, setIsRinging] = React.useState(false);

    const isOnRef = useRef(isOn);
    const timeRef = useRef(time);

    let audio = new Audio('alarm.mp3');
    let audioRef = useRef(audio);

    useEffect(() => {
        const interval = setInterval(() => {
            tick()
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        isOnRef.current = isOn;
        timeRef.current = time;
    }, [isOn, time]);

    function on_item_click(){
        
        if(isRinging){
            setIsRinging(false);
            audioRef.current.pause()

            setTime(props.time);
            
            // stop playing sound
            // let audio = new Audio('alarm.mp3');
        }else{
            setIsOn(!isOn);
        }

    }

    function tick(){
        if(isOnRef.current){
            setTime(timeRef.current + 1);
        }
    }

    return(
        <div>
            <div className="stopwatch" onClick={on_item_click}>
                <div className="circle-top"></div>
                <div className="serial-timer-top">
                    <div className="serial-timer-description">{props.description}</div>
                </div>
                <div className="serial-timer-text" timer-id={props.id} >{format(time)}</div>
            </div>
        </div>
    )
}

export default Stopwatch;