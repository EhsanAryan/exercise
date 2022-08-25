import React from "react";
import ReactDOM from "react-dom";
import "./timer.css";
import List from './list';
import { AppContext } from "../contexts/AppContext";


let interval;

class Timer extends React.Component {

    constructor(){
        super();
        this.state = {
            hour : 0 , 
            minute : 0 ,
            second : 0 ,
            isStart : false
        }
    }

    static contextType = AppContext;
    

    startTimer = () => {
        if(this.state.isStart===false){
            this.setState({
                isStart : true
            });

            interval = setInterval(() => {
                if(this.state.second < 59){
                    this.setState({
                        second : this.state.second + 1
                    });
                }
                else {
                    if(this.state.minute < 59){
                        this.setState({
                            second : 0 ,
                            minute : this.state.minute + 1
                        });
                    }
                    else {
                        this.setState({
                            second : 0 ,
                            minute : 0 ,
                            hour : this.state.hour + 1
                        });
                    }
                }
                // console.log(`${this.state.hour} : ${this.state.minute} : ${this.state.second}`);
            } , 1000);
        }
    }

    


    stopTimer = () =>{
        if(this.state.isStart===true){
            this.setState({
                isStart : false
            });
            clearInterval(interval);
        }
    }


    resetTimer = () => {
        this.stopTimer();
        this.setState({
            hour : 0 ,
            minute : 0 , 
            second : 0
        });
    }


    addTime = (event) => {
        let newTime = event.target.innerHTML;

        this.context.setTimeArray([...this.context.timeArray , newTime]);
    }

    
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <>
                <button onClick={this.context.changeThemeColor} className="timer-btn change-btn" 
                style={{
                    backgroundColor: this.context.isDark ? "white" : "black" ,
                    color: this.context.isDark ? "black" : "white"
                    }}>
                    {this.context.isDark ? "Light" : "Dark"}
                </button>
                <div className="timer-div"
                style={{
                    backgroundColor : this.context.isDark ? "#0cf" : "#3a3e59" , 
                    color : this.context.isDark ? "black" : "white"
                }}>
                    <span onClick={this.addTime}>
                        {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}
                    </span>
                    <span>
                        <button onClick={this.startTimer} className="timer-btn start-btn">Start</button>
                        <button onClick={this.stopTimer} className="timer-btn stop-btn">Stop</button>
                        <button onClick={this.resetTimer} className="timer-btn reset-btn">Reset</button>
                    </span>
                </div>
            </>
        );
    }
}

export default Timer;