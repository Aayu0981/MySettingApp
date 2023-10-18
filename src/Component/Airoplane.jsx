import React from 'react'
 import { FaAirbnb, FaArrowLeft, FaFontAwesome, FaFontAwesomeLogoFull, FaPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Airoplane() {
const navigate=useNavigate();

const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }



  return (
    <div >
         
         <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

        <div><span>Aeroplane Mode</span></div>

        <div>
          <h4>Aeroplane Mode</h4>
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>

        </div>





      
     </div>
  )
}

export default Airoplane;


 
