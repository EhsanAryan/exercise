import React from "react";
import ReactDOM from "react-dom";
import "./timer.css";



let interval;

export default class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            time : 12
        }
    }


    componentDidUpdate(){
        if(this.state.time===0){
            clearInterval(interval);
        }
    }


    startTimer = () => {
        if(!interval){
            interval = setInterval(()=>{
                this.setState({
                    time : this.state.time - 1
                });
            } , 1000);
        }
    }


    stopTimer = () =>{
        if(interval){
            clearInterval(interval);
            interval=undefined;
        }
    }


    render(){

        return (
            <div className="timer-div">
                Time: {this.state.time}
                <span>
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                </span>
            </div>
        );
    }
}