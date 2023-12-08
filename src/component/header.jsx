import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import Context from '../context/context';


export default function Header() {

    // start use context
    const { location , setStatusDay , statusDay , time } = useContext(Context);
    // end use context

    // start find sunrice and sunset
    const [sun, setSun] = useState();
    useEffect(() => {
        const handleSun = async () => {
            try {
                const response = await axios.get(`https://api.sunrisesunset.io/json?lat=${location.latitude}&lng=${location.longitude}`);
                // console.log(response.data.results);
                setStatusDay(response.data.results);
            } catch (error) {
                console.error(error.message);
            }
        }

        handleSun();
    }, [])
    // end find sunrice and sunset

    return (
        <div className="header">
            <p className="header-content-city mb-0">{statusDay?.timezone}</p>
            <p className="header-content-date mb-0">{time.toLocaleTimeString()}</p>
        </div>
    )
}
