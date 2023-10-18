import React from 'react'
import { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Sound3() {

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


 
     <div><span>Sound assistant</span></div>

      <div>
          <p>Adjust media sound in multiple apps</p>
 <       p>adjust sound for individual apps while multiple apps play audio simultaneously</p>

          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
        </div>
   
         
        <div>
          <p>Multiple audio sources</p>
 <       p> Don't adjust media volume during incoming notifications or while audio from other source is played</p>

          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
        </div>

   




    </div>
  )
}

export default Sound3