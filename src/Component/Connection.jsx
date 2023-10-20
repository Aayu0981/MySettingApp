import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Connection() {

  const navigate = useNavigate();

  const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }

  return (
   <div  style={{width:350}} >
         
         
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      



     <p className='heading'>Wi-Fi</p>

      <div className='Modes'>
         <p className='Darktext1'>Wi-Fi</p>

         <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>

       </div>

       <hr/>

       <div>
        <p className='Lighttext'>MORE SETTINGS</p><br/>
       </div>

       <div className='Modes' onClick={()=>navigate("/Connection1")}>
       <p className='Darktext1'>Additional settings</p>
       <span>&gt;</span>
       </div>
            





   </div>
  )
}

export default Connection;