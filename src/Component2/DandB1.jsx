import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DandB1() {

  const navigate=useNavigate();

  const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
  const toggleAirplaneMode = () => {
  setIsAirplaneModeOn(!isAirplaneModeOn);
}

  return (
    <div style={{width:350}}>

         <div style={{marginLeft:10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
      

      <p className='heading' style={{marginLeft:30}}>Schedule Dark mode</p>

      <div className='Modes'>
        <p className='Darktext1' style={{marginLeft:30}}>Schedule Dark mode</p>

        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>

      </div>
    </div>
  )
}

export default DandB1