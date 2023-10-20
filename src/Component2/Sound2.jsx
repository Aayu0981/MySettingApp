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

   
    <div style={{width:400}}>


        
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

     <p className='heading'>Additional settings</p>

     <div className='Modes'>
        <p className='Darktext1'>Dial pad tones</p>

         {/* toggle button code 2 */}
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       
     </div>

     <div className='Modes' >
        <p className='Darktext1'>Tap sounds</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
     </div>

     <div   className='Modes'>
        <p className='Darktext1'>Play sound when locking device</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
     </div>
       

       <div  className='Modes' >
        <p className='Darktext1'>play sound when taking screenshot</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       
       <div className='Modes' >
        <p className='Darktext1'>play sound when uninstalling apps</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       <div className='Modes' >
        <p className='Darktext1'>play sound when deleting items</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' >
        <p className='Darktext1'>play sound when charger is connected</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} style={{width:120}} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' >
        <p className='Darktext1'>play audio at startup</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
       </div>











    </div>

  )
}

export default Sound2