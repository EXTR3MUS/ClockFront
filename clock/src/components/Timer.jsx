import React, {useEffect, useRef} from "react";
import "./Timer.css"
import {format} from "./utils";

import {MdPlayArrow, MdPause, MdReplay} from "react-icons/md";
import { IconContext } from "react-icons/lib";

const Timer = (props) => {
    const [time, setTime] = React.useState(props.time);
    const [initialTime, setInitialTime] = React.useState(props.initialTime);
    const [isOn, setIsOn] = React.useState(props.isOn);
    const [isRinging, setIsRinging] = React.useState(false);

    const isOnRef = useRef(isOn);
    const timeRef = useRef(time);
    const isRingingRef = useRef(isRinging);

    const timerDivRef = useRef(null);

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
        isRingingRef.current = isRinging;
    }, [isOn, time, isRinging]);

    // updating when changing props
    useEffect(() => {
        setIsOn(props.isOn)
        setTime(props.time)
        setInitialTime(props.initialTime)
    }, [props])

    function on_item_click(){
        
        if(isRinging){
            setIsOn(false);
            setIsRinging(false);
            timerDivRef.current.classList.remove("ringing");
            audioRef.current.pause()

            setTime(props.time);
        }else{
            setIsOn(!isOn);
        }
    }

    function reset_timer(e){
        // preventing cascading event
        e.stopPropagation();

        setIsOn(false);
        setIsRinging(false);
        timerDivRef.current.classList.remove("ringing");
        audioRef.current.pause()

        setTime(props.time);
    }


    function tick(){
        if(isOnRef.current){
            document.title = format(timeRef.current);

            if(timeRef.current > 0){
                setTime(timeRef.current - 1);
            }

            if(isRingingRef.current){
                setTime(timeRef.current + 1);
                console("ringing")
            }else if(timeRef.current === 0){
                setIsRinging(true);
                setTime(0);    

                audioRef.current.play();
                audioRef.current.loop = true;

                // adding ring class to timer
                timerDivRef.current.classList.add("ringing");
            }
            
        }
    }

    return(
        <div>
            <div className="timer" ref={timerDivRef} onClick={on_item_click}>
                <div className="circle-top"></div>
                <div className="serial-timer-top">
                    {/* <div className="serial-timer-description">{props.description}</div> */}
                </div>
                <div className="serial-timer-text" timer-id={props.id} >{format(time, isRinging)}</div>
                <div className="icons">
                    <IconContext.Provider value={{size: "40px"}}>
                        <MdReplay onClick={reset_timer}></MdReplay>
                        {isOn ? <MdPause /> : <MdPlayArrow />}
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Timer;