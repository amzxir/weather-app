import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../context/context';
import cloud from "../../public/image/cloud-mini.png";
import sunny from "../../public/image/sunny-mini.png";
import rainy from "../../public/image/rainy-mini.png";


export default function Footer() {

    // start use context
    const { location } = useContext(Context);
    // end use context

    // start call api waether 
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const handleWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=d7add87729d56c0d020e32e6eaea8bf6`);
                // console.log(response);
                setWeather(response.data.list);
            } catch (error) {
                console.error(error.message);
            }
        }

        handleWeather();
    }, [])



    // end call api waether 
    return (
        <div className="weather-hours">
            <div className="row">
                {weather.slice(0, 4).map((i, index) => {
                    return (
                        <div key={index} className="col-md-3 col-6">
                            <div className="card card-body border-0 shadow-sm text-center bg-card">
                                <p className="hours mb-0">{i.dt_txt.slice(10, 16)}</p>
                                <div className="img-center mb-2 mt-2">
                                    {i?.weather?.map((i, index) => {
                                        return (
                                            <img key={index} src={i.main == "Clouds" ? cloud : i.main == "Clear" ? sunny : i.main == "Rain" ? rainy : ""} alt="" />
                                        )
                                    })}
                                </div>

                                <p className="degree mb-0">{`${i.wind.deg.toString().slice(0, 2)} °`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
