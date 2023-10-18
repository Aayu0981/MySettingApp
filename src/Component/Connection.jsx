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
   <div >
         
         
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      



     <div><span>Wi-Fi</span></div>

      <div>
         <p>Wi-Fi</p>

         <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>

       </div>

       <hr/>

       <div>
        <p>MORE SETTINGS</p><br/>
       </div>

       <div  onClick={()=>navigate("/Connection1")}>
       <p>Additional settings</p>
       <span>&gt;</span>
       </div>
            





   </div>
  )
}

export default Connection;