import React from "react";
import "./list-item.css";


const ListItem = (props) => {

    const removeItem = (event) => {
        let currItem = event.target;
        currItem.remove();
    }


    return (
        <>
            {props.timeArray.map((time , index) => {
                return (
                    <div key={index} className="time-item" onClick={removeItem}>
                        {time}
                    </div>
                );
            })}
        </>
    );
}

export default ListItem;


