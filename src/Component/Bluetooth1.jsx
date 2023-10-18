import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Bluetooth1() {

    const navigate=useNavigate();

// toggle button code 1
const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
const toggleAirplaneMode = () => {
setIsAirplaneModeOn(!isAirplaneModeOn);
}

  return (
    <div>
           

        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      

       <div><span>Additional settings</span></div>


     <div>
         <p>CONNECTION</p>

          <h4>Pair compatible device</h4>
          <p>Quickly connect earnphone, speakers, and other compatible device</p>

          {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>


           <h4>Bluetooth blocklist</h4>
         <span>&gt;</span>
     </div>

           <hr/>

       <div>
            <p>DISPLAYED ITEMS</p>

            <h4>Show Bluetooth device without names</h4>
            {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label> 

        </div>





    </div>
  )
}

export default Bluetooth1