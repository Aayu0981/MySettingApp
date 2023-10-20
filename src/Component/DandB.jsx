import React from 'react'
import { FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Dark from '../image/Dark2.jpeg'
import Light from '../image/light.jpeg'

function DandB() {

  const navigate=useNavigate();

  const [isDisplayOn, setIsDisplayOn] = useState(false);
  const toggleDisplay = () => {
  setIsDisplayOn(!isDisplayOn);
}

  return (
    <div style={{width:350}}>

      <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
      
      <p className='heading'>Display</p>

        <p className='Lighttext'>COLOR SCHEME</p>

        <div  style={{display:'flex'}}>
            
        <div style={{marginLeft:0}} >
            <img src={Light} style={{width:130 , marginLeft:0}} />
            <p className='Darktext1' style={{marginLeft:22,marginTop:8}}>Light mode</p>
          </div>

          <div style={{marginLeft:0}}>
            <img src={Dark} style={{width:130,height:160}} />
            <p className='Darktext1' style={{marginLeft:40,marginTop:8}}>Dark mode</p>
          </div>
        </div>

        <div className='Modes'   onClick={()=> navigate("/DandB1")}  >
          <p className='Darktext1'>Sehedule Dark mode</p>
          <p className='Lighttext'>Off &gt;</p>
        </div>
        <hr/>


        <p  className='Lighttext' >SCREEN</p>

        <div   className='Modes'  onClick={()=> navigate("/DandB2")}>
          <p className='Darktext1'>Brightness level</p>
          <p  className='Lighttext'>&gt;</p>
        </div>



        <div   className='Modes'  onClick={()=> navigate("/DandB3")}>
          <p className='Darktext1'> Reading mode</p>
          <p className='Lighttext'>on&gt;</p>
        </div>
         

        <div  className='Modes' >
          <p className='Darktext1'>Refresh rate</p>
          <p className='Lighttext'>60 Hz</p>
        </div>

        <hr/>

        <p  className='Lighttext'>SYSTEM</p>

        <div   className='Modes'  onClick={()=> navigate("/DandB4")}>
          <p className='Darktext1'>When device is in VR</p>
          <p className='Lighttext'>&gt;</p>
        </div>


        <div  className='Modes' >
          <p  className='Darktext1'>Auto-rotate screen</p>
          
          <label className="switch">
              <input type="checkbox" onChange={toggleDisplay} checked={isDisplayOn} />
              <span className="slider round"></span>
              </label>
       

        </div>


        
     </div>
  );
}

export default DandB;