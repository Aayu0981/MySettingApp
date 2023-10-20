import React from 'react'
import { FaDocker, FaGoogle, FaGoogleDrive, FaMap, FaMapMarked, FaMapSigns, FaPage4, FaPagelines, FaPager, FaPhone } from 'react-icons/fa'
import { useState } from 'react';


function Notification1() {

    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
    const toggleAirplaneMode = () => {
    setIsAirplaneModeOn(!isAirplaneModeOn);
 }


  return (
    <div>
   <div><span>Notification </span></div>
     


  < div id='box1' >
      <label className="input-label">
       <span className="search-icon" >&#128269;</span>

         <input id='searchbox' type="text" placeholder="Search settings" />
       </label>
    </div>

    <br/>
    <p>SORT BY TIME RECEIVED</p>
    {/* vo button deni h */}


    <div>
        <FaGoogle/><p>Google</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
    </div>
   


    <div>
        <FaPhone/><p>Phone</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
    </div>


    
    <div>
        <FaGoogleDrive/><p>Drive</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
    </div>

    <div>
        <FaMapMarked/><p>Drive</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
    </div>









    </div>
  )
}

export default Notification1