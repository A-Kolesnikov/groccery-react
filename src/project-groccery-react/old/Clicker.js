import React from 'react';
import { useState } from 'react';
import Segment from './Segment';
import {Answer} from './Answer';

function Clicker() {
    const [number, setNumber] = useState("nothing")
    function createSegments() {
        let result = []
        for (let i = 1; i < 7; i++) {
            result.push(< Segment key={i} num1={i} num2={i * 2} kbGetNumber={setNumber} />)
        }
        return result
    }
    let segments = createSegments()
    return (
        <div className="container">
            <div className={'flex-column justify-content-center'}>
                {segments}
                < Answer num={number} />
            </div>
        </div>
    )
}

export default Clicker