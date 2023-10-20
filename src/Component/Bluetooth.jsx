import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';



function Bluetooth() {

  const navigate = useNavigate();

  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
       const toggleBluetooth = () => {
       setIsBluetoothOn(!isBluetoothOn);
    }


  return (
    <div style={{width:400}}>
      
      
      <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      
        
      <p className='heading'>Bluetooth</p>

<div className='Modes'>
   <p className='Darktext' >Bluetooth</p>

   <label className="switch">
        <input type="checkbox" onChange={toggleBluetooth} checked={isBluetoothOn} />
        <span className="slider round"></span>
        </label>

 </div>

 <div className='Modes'>
  <p className='Darktext1'>Device name</p>
  <p className='Lighttext'>POCO M4 Pro &gt;</p>
 </div>

 <hr style={{opacity:0.5}}/>

 <div>
  <p className='Lighttext' style={{marginLeft:0,marginTop:20}}>ADDITONAL SETTINGS</p>
 </div>

 <div  className='Modes' onClick={()=>navigate("/Bluetooth1")}>
 <p className='Darktext1'>Additional settings</p>
 <p className='Lighttext'>&gt;</p>
 </div>
      

    
       
     </div>
    
  )
}

export default Bluetooth;

