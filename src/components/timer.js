import React from "react";
import ReactDOM from "react-dom";
import "./timer.css";
import List from './list';


let interval;

export default class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            hour: 0 ,
            minute: 0 ,
            second: 0 ,
            isStart: false , 
            timeArray : []
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
    }


    addTime = () => {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        let newTime = `${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`;

        this.setState({
            timeArray : [...this.state.timeArray , newTime]
        });
    }
    


    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <>
            <button onClick={this.props.changeThemeColor} className="timer-btn change-btn"
            style={{
                backgroundColor: this.props.isDark ? "white" : "black" ,
                color: this.props.isDark ? "black" : "white"
                }}>
                {this.props.isDark ? "Light" : "Dark"}
            </button>
            <div className="timer-div">
                <span onClick={this.addTime}>
                    {`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}
                </span>
                <span>
                    <button onClick={this.startTimer} className="timer-btn start-btn">Start</button>
                    <button onClick={this.stopTimer} className="timer-btn stop-btn">Stop</button>
                    <button onClick={this.resetTimer} className="timer-btn reset-btn">Reset</button>
                </span>
            </div>
            <List timeArray={this.state.timeArray} />
            </>
        );
    }
}