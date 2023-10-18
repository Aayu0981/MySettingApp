import React from 'react'
import { FaAssistiveListeningSystems, FaDesktop, FaMobile, FaMobileAlt } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function About3() {

    const navigate=useNavigate();


    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }


  return (
    <div  style={{width:350}}>
        


        <div><span>Back up and restore</span></div>

        <div>

          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlhFBn7y5CnaEs1or-sN8v91G0XAwKEkaMTRZY8QKj8ZAX8k-z"  />
        </div>

        <hr/>
         
         <p>LOCAL</p>


        <div>
            <FaMobileAlt style={{color:'blue'}}/>
           <p>Mobile device</p> 
           <p>Back up and restore items on this device</p>
        </div>

        <div >
            <FaDesktop style={{color:'blue'}}/>
            <p>Computer</p>
            <p>Back up and restore items using a computer</p>
        </div>

        <hr/>
        <p>CLOUD</p>

        <div>
            <p>Xiaomi Cloud</p>
            <p>Sync the list of apps, back up sytem settings and home sceen layout</p>
            <p>&gt;</p>
        </div>

        <hr/>

        <p>GOOGLE BACKUPS</p>

        <div   onClick={()=>navigate("/About5")}>
            <p>Back up my data</p>
            <p>On</p>
            <p>&gt;</p>
        </div>

        <div>
            <p>Automatic restore </p>
            <p>When reinstalling an app,restore backed-up settings and data</p>

            <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>

        </div>





    </div>
  )
}

export default About3