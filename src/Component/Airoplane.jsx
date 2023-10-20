import React from 'react'
 import { FaAirbnb, FaArrowLeft, FaFontAwesome, FaFontAwesomeLogoFull, FaPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Airoplane() {
const navigate=useNavigate();

const [isAirplaneModeOn1, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn1);
    }



  return (
    <div style={{width:400}} >
         
         <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

        <p className='heading'>Aeroplane Mode</p>

        <div className='Media'>
          <p className='Darktext1' style={{marginLeft:0}}>Aeroplane Mode</p>
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn1} />
              <span className="slider round"></span>
              </label>

        </div>





      
     </div>
  )
}

export default Airoplane;


 
