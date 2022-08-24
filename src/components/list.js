import React from "react";
import "./list.css";
import ListItem from "./list-item";


const List = (props) => {
    return (
        <div className="time-list">
            <ListItem timeArray={props.timeArray} />
        </div>
    );
}

export default List;