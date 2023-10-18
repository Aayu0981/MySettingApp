import React from 'react'
import { useState } from 'react';

function About5() {


   
    // toggle button code 1
    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }


  return (
    <div>
    

    <div><span>Back up my data</span></div>


    <div>
        <p>Turn on backups</p>

        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       
    </div>

    <div>

        <p>Automatically back up device data (sych as Wi-Fi password and call history)
            and app data (such as settings and files stored by apps) remotely
        </p>

        <p>when you turn on automatic backup,device and app data is periodically saved remotely.</p>
    </div>






    </div>
  )
}

export default About5