import React from 'react';

export default function Segment(props) {
    return (
        <div className={"row justify-content-center"}>
            <button className={`btn btn-outline-danger col-3`} onClick={(e) => props.kbGetNumber(e.target.textContent)}>
                {props.num1}
            </button>
            <div className="col-1"></div>
            <button className={"btn btn-outline-success col-3"} onClick={(e) => props.kbGetNumber(e.target.textContent)}>
                {props.num2}
            </button>
        </div>
    )
}