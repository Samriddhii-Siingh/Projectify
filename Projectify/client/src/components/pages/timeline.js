import data from './data';
import TimeItem from './timeItem';
import {Link} from 'react-router-dom';
import React from 'react';
import './timeline.css';
const TimeLine=()=>data.length > 0 && (
    <>
    
    <div className='timeline-card'>
    <div className="timeline-container">
        {data.map((data,idx) => (
            <TimeItem data={data} key={idx}/>
        ))}
    </div>
    </div>
    <Link className='timeline-goback' to='/Dashboard'>Go Back</Link>
    </>
);
export default TimeLine;