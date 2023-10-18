import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';



function Bluetooth() {

  const navigate = useNavigate();

  const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }


  return (
    <div>
      
      
      <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      
        
      <div><span>Bluetooth</span></div>

<div>
   <h4>Bluetooth</h4>

   <label className="switch">
        <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
        <span className="slider round"></span>
        </label>

 </div>

 <div>
  <h4>Device name</h4>
  <span>POCO M4 Pro &gt;</span>
 </div>

 <hr/>

 <div>
  <p>ADDITONAL SETTINGS</p><br/>
 </div>

 <div  onClick={()=>navigate("/Bluetooth1")}>
 <h4>Additional settings</h4>
 <span>&gt;</span>
 </div>
      

    
       
     </div>
    
  )
}

export default Bluetooth;

