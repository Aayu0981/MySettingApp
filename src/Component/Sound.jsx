import React from 'react'
import { FaBell, FaClock, FaFonticons, FaFootballBall, FaMusic, FaPhoneAlt, FaReadme, FaRegBell, FaRing, FaSoundcloud, FaUserLock, FaVolumeUp,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Sound() {
  const navigate = useNavigate();

  return (
    <div >

        
         <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
         </div>


        
    <div><span>Sound & vibration</span></div>

    <div style={{display:'flex'}}>
    <div style={{backgroundColor:'red',width:150,height:170,borderRadius:30}}>
      <FaBell style={{marginTop:30}}/>
      <p>Notifications</p>
      <p>Droplets</p>
    </div>


    <div>
    <div  style={{backgroundColor:'red',width:180,height:100,borderRadius:30}}>
      <FaPhoneAlt/>
      <p>Ringtone</p>
      <p>POCO</p>
    </div>

    <div  style={{backgroundColor:'red',width:180,height:100,borderRadius:30}}>
     <FaClock/>
      <p>Alarm</p>
      <p>Daydream</p>
    </div>
    </div>
    </div>

    <div>
      <p>Adjust volume</p>
      <br/>

      <div>
        <FaMusic/> Media 

      </div>

      <div>
        <FaBell/> Ringtone 

      </div>

      <div>
        <FaClock/> Alarm 
      </div>

    </div>

    <div onClick={()=>navigate("/Sound3")}> 
      <p>Sound assistant</p>
      <p>Customise your sound setting</p>
      <span className="arow">&gt;</span>
    </div>
    
    <hr/>

    <div>
      <p>SILENT MODE</p><br/>
       
       <div>
      <p>Silent mode</p>
      <p>Silence incoming calls and notifications</p>
      </div>

      <div>
        <p>Silence media in Silent mode</p>
        <p>Games, music, videos, and other apps</p>
      </div>

      <div  onClick={()=>navigate("/Sound1")}>
        <p>Do not disturb</p>
        <p>There'll be no reminders for incoming calls
          and notifications
        </p>
        <span className="arow">&gt;</span>
      </div>

      <div onClick={()=>navigate("/Sound2")} >
        <p>Additional settings</p>
        <span className="arow">&gt;</span>
      </div>
    </div>






   </div>
  )
}

export default Sound;