import React, { useState, useEffect } from 'react';
import Layouts from './component/layouts';
import axios from "axios";

export default function App() {

  // start find location user
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (location) {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  // end find location user

  // start find sunrice and sunset
  console.log(location)
  const [sun , setSun] = useState();
  useEffect(() => {
    const handleSun = async() => {
      try {
        const response = await axios.get('https://api.sunrisesunset.io/json?lat=35.6709634&lng=-51.3406765');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    handleSun();
  }, [])
  // end find sunrice and sunset

  return (
    <div className="application" style={{ background: 'linear-gradient(180deg, #BCE8FF 0%, #FFF 41.26%)' }}>
      <Layouts />
    </div>
  )
}

