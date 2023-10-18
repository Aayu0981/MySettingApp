import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Sound2() {

    const navigate=useNavigate();

    // toggle button code 1
    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = () => {
       setIsAirplaneModeOn(!isAirplaneModeOn);
    }


  return (

   
    <div style={{width:350,backgroundColor:'red'}}>


        
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

     <div><span>Additional settings</span></div>

     <div >
        <p>Dial pad tones</p>

         {/* toggle button code 2 */}
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       
     </div>

     <div >
        <p>Tap sounds</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
     </div>

     <div  >
        <p>Play sound when locking device</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
     </div>
       

       <div  >
        <p>play sound when taking screenshot</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       
       <div  >
        <p>play sound when uninstalling apps</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       <div >
        <p>play sound when deleting items</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  >
        <p>play sound when charger is connected</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  >
        <p>play audio at startup</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>











    </div>

  )
}

export default Sound2