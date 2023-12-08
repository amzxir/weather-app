import React, { useEffect, useState } from 'react';

export default function Header() {

    // start get time 
    const [time , setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    },[])
    // end get time 

    return (
        <div className="header">
            <p className="header-content-city mb-0">San Fransisco</p>
            <p className="header-content-date mb-0">{time.toLocaleTimeString()}</p>
        </div>
    )
}
