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
    <div style={{width:350}}>
      
      
      <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      
        
      <p className='heading'>Bluetooth</p>

<div className='Modes'>
   <p className='Darktext' >Bluetooth</p>

   <label className="switch">
        <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
        <span className="slider round"></span>
        </label>

 </div>

 <div className='Modes'>
  <p className='Darktext1'>Device name</p>
  <p className='Lighttext'>POCO M4 Pro &gt;</p>
 </div>

 <hr style={{opacity:0.5}}/>

 <div>
  <p className='Lighttext'>ADDITONAL SETTINGS</p><br/>
 </div>

 <div  className='Modes' onClick={()=>navigate("/Bluetooth1")}>
 <p className='Darktext1'>Additional settings</p>
 <p className='Lighttext'>&gt;</p>
 </div>
      

    
       
     </div>
    
  )
}

export default Bluetooth;

