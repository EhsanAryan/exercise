import React , { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "./TimerButtons.css";


const ChangeButton = () => {
    const context = useContext(AppContext);

    return(
        <button onClick={context.changeThemeColor} className="timer-btn" 
        style={{
            backgroundColor: context.isDark ? "white" : "black" ,
            color: context.isDark ? "black" : "white"
            }}>
            {context.isDark ? "Light" : "Dark"}
        </button>
    );
}

export default ChangeButton;