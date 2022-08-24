import React from 'react';
import ReactDOM from "react-dom";
import Hello from "./hello";
import Timer from "./timer";
import "./App.css";



export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            isDark : false
        }
    }

    changeThemeColor = () => {
        this.setState({
            isDark : !this.state.isDark
        })
    }



    render(){
        return (
                <div className='parent-div'
                style={{
                    backgroundColor: this.state.isDark ? "black" : "#26abad" ,
                    color : this.state.isDark ? "white" : "black"
                }}>
                    <Hello />
                    <Timer isDark={this.state.isDark} changeThemeColor={this.changeThemeColor} />
                </div>
        );
    }
}