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
    <div style={{width:350}}>
           

        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      

       <p className='heading'>Additional settings</p>

       <p className='Lighttext'>CONNECTION</p>
     <div >
         <div >
            <div>
          <p className='Darktext1' style={{marginBottom:0}}> Pair compatible device</p>
          <p className='Lighttext' style={{marginTop:0}}>Quickly connect earnphone, speakers, and other compatible device</p>
          </div>

          {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
              </div>

           <div  className='Modes'> 
           <p className='Darktext1'>Bluetooth blocklist</p>
            <p className='Lighttext'>&gt;</p>
         </div>
     </div>

           <hr/>

           <p className='Lighttext'>DISPLAYED ITEMS</p>

       <div className='Modes'>
           

            <p className='Darktext1'>Show Bluetooth device without names</p>
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