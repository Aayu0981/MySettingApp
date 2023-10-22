import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function About5() {
   

  const navigate=useNavigate();

   
    // toggle button code 1
    const [isbackupsOn, setIsbackupsOn] = useState(false);
       const togglebackups = () => {
       setIsbackupsOn(!isbackupsOn);
    }


  return (
    <div style={{width:350}}>

       <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    

    <p className='heading'>Back up my data</p>


    <div className='Modes'>
        <p className='Darktext1' >Turn on backups</p>

        <label className="switch">
              <input type="checkbox" onChange={togglebackups} checked={isbackupsOn} />
              <span className="slider round"></span>
              </label>
       
    </div>

    <div>

        <p className='Lighttext' style={{marginLeft:0}} >Automatically back up device data (sych as Wi-Fi password and call history)
            and app data (such as settings and files stored by apps) remotely
        </p>

        <p className='Lighttext'   style={{marginLeft:0}}>when you turn on automatic backup,device and app data is periodically saved remotely.</p>
    </div>






    </div>
  )
}

export default About5