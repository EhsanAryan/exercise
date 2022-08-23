import React from "react";
import ReactDOM from "react-dom";
import "./timer.css";



let interval;

export default class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            hour: 0 ,
            minute: 0 ,
            second: 0 ,
            isStart: false
        }
    }

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
        console.log(this.state.hour , this.state.minute , this.state.isStart);
    }


    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <div className="timer-div">
                {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}
                <span>
                    <button onClick={this.startTimer} className="timer-btn">Start</button>
                    <button onClick={this.stopTimer} className="timer-btn">Stop</button>
                    <button onClick={this.resetTimer} className="timer-btn">Reset</button>
                </span>
            </div>
        );
    }
}