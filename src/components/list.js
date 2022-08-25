import React , { useContext } from "react";
import "./list.css";
import ListItem from "./list-item";
import { AppContext } from "../contexts/AppContext";


const List = () => {
    const appContext = useContext(AppContext);
    return (
        <div className="time-list" 
        style={{
            backgroundColor : appContext.isDark ? "#0cf" : "#3a3e59" ,
            color: appContext.isDark ? "black" : "white"
        }}>
            <ListItem timeArray={appContext.timeArray} setTimeArray={appContext.setTimeArray}/>
        </div>
    );
}

export default List;