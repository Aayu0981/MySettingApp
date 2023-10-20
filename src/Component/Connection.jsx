import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Connection() {

  const navigate = useNavigate();

  const [iswifiOn, setIswifiOn] = useState(false);
       const togglewifi = () => {
       setIswifiOn(!iswifiOn);
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
              <input type="checkbox" onChange={togglewifi} checked={iswifiOn} />
              <span className="slider round"></span>
              </label>

       </div>

       <hr/>

       
        <p className='Lighttext' style={{marginTop:20}}>MORE SETTINGS</p><br/>
       

       <div className='Modes' onClick={()=>navigate("/Connection1")} >
       <p className='Darktext1' style={{marginTop:0}}>Additional settings</p>
       <p className= 'Lighttext' style={{marginTop:0}}>&gt;</p>
       </div>
            





   </div>
  )
}

export default Connection;