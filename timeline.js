import data from './data';
import TimeItem from './timeItem';
import React from 'react';
import './timeline.css';
const TimeLine=()=>data.length > 0 && (
    <div className='card'>
    <div className="timeline-container">
        {data.map((data,idx) => (
            <TimeItem data={data} key={idx}/>
        ))}
    </div>
    </div>
);
export default TimeLine;