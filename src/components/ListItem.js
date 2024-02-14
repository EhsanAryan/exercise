import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "./ListItem.css";


const ListItem = (props) => {

    const context = useContext(AppContext);

    const removeItem = (event) => {
        // in ravesh baes mishavad ke tamame time hayi ke dar yek lahze sabt kardim hazf shavand.
        // context.setTimeArray(prevValue => prevValue.filter(time => time !== event.target.innerHTML));

        let currItem = event.target;
        currItem.remove();
    }


    return (
        <>
            {context.timeArray.map((time, index) => (
                <div key={index} className="time-item" onClick={removeItem}>
                    <span className="pointer-events-none">
                        {index}:
                    </span>
                    <span className="pointer-events-none">
                        {time}
                    </span>
                </div>

            ))}
        </>
    );
}

export default ListItem;


