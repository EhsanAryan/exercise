import React from "react";
import "./list-item.css";


const ListItem = (props) => {

    const removeItem = (event) => {
        // in ravesh baes mishavad ke tamame time hayi ke dar yek lahze sabt kardim hazf shavand.
        // props.setTimeArray(props.timeArray.filter(time => time !== event.target.innerHTML));

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


