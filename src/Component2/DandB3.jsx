import React from 'react'
import Reading from '../image/Reading mode.jpeg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function DandB3() {
    const navigate=useNavigate();

    const [isReadOn1, setIsReadOn1] = useState(false);
    const toggleRead1 = () => {
    setIsReadOn1(!isReadOn1);
 }


 
 const [isReadOn2, setIsReadOn2] = useState(false);
 const toggleRead2 = () => {
 setIsReadOn2(!isReadOn2);
}


  return (
    <div style={{width:350}}>

<div style={{marginLeft:10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

        <p className='heading' style={{marginLeft:30}}>Reading mode</p>

        <img src={Reading} style={{width:300,borderRadius:30}} />


        <div className='Modes'>
            <p className='Darktext1' style={{marginLeft:30}}>Reading mode</p>

            <label className="switch">
              <input type="checkbox" onChange={toggleRead1} checked={isReadOn1} />
              <span className="slider round"></span>
              </label>

        </div>

        <hr/>

        <div>

            <div id='MobileDevice' style={{alignItems:'center',marginLeft:0}}>
                <div>
                <p className='Darktext1' style={{marginBottom:0}}>Classic</p>
                <p className='Lighttext' style={{marginTop:0}}>Switch to warmer colour to reduce the amomunt of blue light</p>
                </div>
                
                <p  style={{marginRight:10}}>&gt;</p>
            </div>
          
            <div id='MobileDevice' style={{alignItems:'center',marginLeft:0}}>
                <div>
                <p className='Darktext1' style={{marginBottom:0}}>Paper</p>
                <p className='Lighttext' style={{marginTop:0}}>Switch to warmer colour and add paper texture to background to reduce eye strain</p>
                </div>
                
                <p style={{marginRight:10}}>&gt;</p>
            </div>

        </div>

        <hr/>

        <div className='Modes' >

            <div style={{marginLeft:0}}>
                <p className='Darktext1' style={{marginBottom:0}}>Schedule</p>
            <p className='Lighttext' style={{marginTop:0}}>Schedule time to turn Reading mode on and off</p>
            </div>
            
            <label className="switch">
              <input type="checkbox" onChange={toggleRead2} checked={isReadOn2}  style={{width:105}}/>
              <span className="slider round"></span>
              </label>

            
        </div>








    </div>
  )
}

export default DandB3