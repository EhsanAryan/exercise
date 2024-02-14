import React from "react";
import "./Timer.css";
import { AppContext } from "../contexts/AppContext";
import TimerButtons from "./TimerButtons";
import ChangeButton from "./ChangeButton";
import addZeroToNumber from "../utils/addZeroToNumber";


let interval;

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        }
    }

    static contextType = AppContext;

    startTimer = () => {
        if (this.state.isStart === false) {
            this.setState({
                isStart: true
            });

            interval = setInterval(() => {
                if (this.state.second < 59) {
                    this.setState({
                        second: this.state.second + 1
                    });
                }
                else {
                    if (this.state.minute < 59) {
                        this.setState({
                            second: 0,
                            minute: this.state.minute + 1
                        });
                    }
                    else {
                        this.setState({
                            second: 0,
                            minute: 0,
                            hour: this.state.hour + 1
                        });
                    }
                }
                // console.log(`${this.state.hour} : ${this.state.minute} : ${this.state.second}`);
            }, 1000);
        }
    }

    stopTimer = () => {
        if (this.state.isStart === true) {
            this.setState({
                isStart: false
            });
            clearInterval(interval);
        }
    }

    resetTimer = () => {
        this.stopTimer();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0
        });
    }

    addTime = (event) => {
        let newTime = event.target.innerHTML;

        this.context.setTimeArray([...this.context.timeArray, newTime]);
    }

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <>
                <ChangeButton />
                <div className="timer-div"
                    style={{
                        backgroundColor: this.context.isDark ? "#0cf" : "#3a3e59",
                        color: this.context.isDark ? "black" : "white"
                    }}>
                    <span onClick={this.addTime}>
                        {`${addZeroToNumber(h)} : ${addZeroToNumber(m)} : ${addZeroToNumber(s)}`}
                    </span>
                    <TimerButtons startTimer={this.startTimer} stopTimer={this.stopTimer} resetTimer={this.resetTimer} />
                </div>
            </>
        );
    }
}

export default Timer;