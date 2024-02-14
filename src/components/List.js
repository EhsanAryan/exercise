import React , { useContext } from "react";
import "./List.css";
import ListItem from "./ListItem";
import { AppContext } from "../contexts/AppContext";


const List = () => {
    const context = useContext(AppContext);

    return (
        <div className="time-list" 
        style={{
            backgroundColor : context.isDark ? "#26AFCF" : "#3a3e59" ,
            color: context.isDark ? "#222" : "white"
        }}>
            <ListItem />
        </div>
    );
}

export default List;