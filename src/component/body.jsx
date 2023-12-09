import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Context from '../context/context';
import cloud from "../../public/image/cloud.png";
import sunny from "../../public/image/sunny.png";
import rainy from "../../public/image/day.png";



export default function Body() {

    // start use context
    const { location } = useContext(Context);
    // end use context

    // start call api waether 
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const handleWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=d7add87729d56c0d020e32e6eaea8bf6`);
                // console.log(response);
                setWeather(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }

        handleWeather();
    }, [])

    // end call api waether 

    return (
        <div className="body">
            <div className="img-center">
                {weather?.weather?.map((i, index) => {
                    return (
                        <img key={index} src={i.main == "Clouds" ? cloud : i.main == "Clear" ? sunny : i.main == "Rain" ? rainy : ""} alt="" />
                    )
                })}
            </div>
            <div className="content mt-4">
                {weather?.weather?.map((i, index) => {
                    return (
                        <p key={index} className="name-city">{i.description}</p>
                    )
                })}
                <p className="degree">{`${weather?.wind?.deg.toString().slice(0 , 2)}°`}</p>
            </div>
        </div>
    )
}
