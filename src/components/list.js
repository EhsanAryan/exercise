import React , { useContext } from "react";
import "./list.css";
import ListItem from "./list-item";
import { AppContext } from "../contexts/AppContext";


const List = () => {
    const context = useContext(AppContext);

    return (
        <div className="time-list" 
        style={{
            backgroundColor : context.isDark ? "#0cf" : "#3a3e59" ,
            color: context.isDark ? "black" : "white"
        }}>
            <ListItem />
        </div>
    );
}

export default List;