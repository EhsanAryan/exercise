import React , { useState } from 'react';
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Timer from "./Timer";
import List from './List';
import "./App.css";
import { AppContext } from "../contexts/AppContext";

const App = () => {

    let [isDark , setIsDark] = useState(false);
    let [timeArray , setTimeArray] = useState([]);

    const changeThemeColor = () => {
        setIsDark(!isDark);
    }


    return (
        
            <div className='parent-div'
            style={{
                backgroundColor: isDark ? "#222" : "#26AFCF" ,
                color : isDark ? "white" : "#222"
            }}>
                <AppContext.Provider value={{
                    isDark : isDark,
                    changeThemeColor : changeThemeColor ,
                    timeArray : timeArray ,
                    setTimeArray : setTimeArray
                }}>
                    <Hello />
                    <Timer />
                    <List/>
                </AppContext.Provider>
            </div>
        
    );

}

export default App;