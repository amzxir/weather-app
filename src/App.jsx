import React, { useState, useEffect } from 'react';
import Layouts from './component/layouts';
import Context from './context/context';

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

  // start fetch data staus day
  const [statusDay, setStatusDay] = useState();
  // end fetch data staus day

  // start get time 
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [])
  // end get time 

  const [status , setStatus] = useState("");
  useEffect(() => {
    const handleCheckDay = async() => {
      if (statusDay?.sunrise > time.toLocaleTimeString()) {
        setStatus("#1D2837");
        import('./scss/styles-night.scss')
      } else if( statusDay?.sunrise < time.toLocaleTimeString()) {
        setStatus("linear-gradient(180deg, #BCE8FF 0%, #FFF 41.26%)");
        import('./scss/styles-light.scss')
      }
    }
    handleCheckDay();
  })

  return (
    location.lat === null && location.lng === null ? <p>Wait for a few moments, if your exact location is not determined, turn on your vpn breaker</p> :
      <Context.Provider value={{ location, setStatusDay, statusDay, time }}>
        <div className="application" style={{ background: status }}>
          <Layouts />
        </div>
      </Context.Provider>
  )
}

