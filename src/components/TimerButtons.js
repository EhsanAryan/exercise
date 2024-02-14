import React from "react";
import "./TimerButtons.css";

const TimerButtons = (props) => {

    return (
        <span>
            <button onClick={props.startTimer} className="timer-btn">Start</button>
            <button onClick={props.stopTimer} className="timer-btn">Stop</button>
            <button onClick={props.resetTimer} className="timer-btn">Reset</button>
        </span>
    );
}

export default TimerButtons;