import React, {useEffect, useRef} from "react";
import "./Timer.css"
import {format} from "./utils";

const Timer = (props) => {
    const [time, setTime] = React.useState(props.time);
    const [initialTime, setInitialTime] = React.useState(props.initialTime);
    const [isOn, setIsOn] = React.useState(props.isOn);
    const [isRinging, setIsRinging] = React.useState(false);

    const isOnRef = useRef(isOn);
    const timeRef = useRef(time);

    let audio = new Audio('alarm.mp3');
    let audioRef = useRef(audio);

    useEffect(() => {
        console.log("component mounted")

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

    // updating when changing props
    useEffect(() => {
        setIsOn(props.isOn)
        setTime(props.time)
        setInitialTime(props.initialTime)
    }, [props])

    function on_item_click(){
        
        if(isRinging){
            setIsRinging(false);
            audioRef.current.pause()

            setTime(props.time);
        }else{
            setIsOn(!isOn);
        }
    }


    function tick(){
        if(isOnRef.current){
            if(timeRef.current > 1){
                setTime(timeRef.current - 1);
            }else{
                setIsOn(false);
                setIsRinging(true);
                setTime(0);    

                audioRef.current.play();
            }
        }
    }

    return(
        <div>
            <div className="timer" onClick={on_item_click}>
                <div className="circle-top"></div>
                <div className="serial-timer-top">
                    <div className="serial-timer-description">{props.description}</div>
                </div>
                <div className="serial-timer-text" timer-id={props.id} >{format(time)}</div>
            </div>
        </div>
    )
}

export default Timer;