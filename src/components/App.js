import React from 'react';
import ReactDOM from "react-dom";
import Hello from "./hello";
import Timer from "./timer";
import "./App.css";


export default class App extends React.Component {
    render(){
        return (
            <div className='parent-div'>
                <Hello />
                <Timer />
            </div>
        );
    }
}