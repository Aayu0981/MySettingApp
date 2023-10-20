import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Notification2() {

  const navigate=useNavigate();

    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
    const toggleAirplaneMode = () => {
    setIsAirplaneModeOn(!isAirplaneModeOn);
 }


  return (
    <div style={{width:350}}>

      <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>


        <p className='heading'>Additional cards</p>

        <div className='Modes' style={{marginLeft:0}}>
            <p className='Darktext1'  style={{marginLeft:0}}>Smart home</p>
            <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
            
        </div>
    </div>
  )
}

export default Notification2