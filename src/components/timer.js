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

    componentDidMount(){
        interval = setInterval(() => {
            this.setState({
                time : this.state.time -1
            });
        } , 1000);
    }

    componentDidUpdate(){
        if(this.state.time===0){
            clearInterval(interval);
        }
    }

    render(){

        return (
            <div className="timer-div">
                Time: {this.state.time}
            </div>
        );
    }
}