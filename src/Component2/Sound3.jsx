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
  <div style={{width:400}}>

        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>


 
     <p className='heading'>Sound assistant</p>

      <div style={{display:'flex',marginLeft:0,alignItems:'center'}}>

        <div  style={{marginLeft:0}} >
          <p className='Darktext1' style={{marginBottom:5}}>Adjust media sound in multiple apps</p>
         <p className='Lighttext' style={{marginTop:0}}>adjust sound for individual apps while multiple apps play audio simultaneously</p>
         </div>


         <div>

          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
              </div>

        </div>
   
         
        <div style={{display:'flex',marginLeft:0,alignItems:'center'}}>

          <div style={{marginLeft:0}}>
          <p className='Darktext1' style={{marginBottom:5}}>Multiple audio sources</p>
          < p className='Lighttext' style={{marginTop:0}}> Don't adjust media volume during incoming notifications or while audio from other source is played</p>

          </div>
            

            <div >
          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
              </div>


        </div>

   




    </div>
  )
}

export default Sound3