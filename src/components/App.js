import React , { useState } from 'react';
import ReactDOM from "react-dom";
import Hello from "./hello";
import Timer from "./timer";
import List from './list';
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
                backgroundColor: isDark ? "black" : "#26abad" ,
                color : isDark ? "white" : "black"
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