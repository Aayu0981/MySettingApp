import React from 'react'
import { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Sound3() {

    const navigate=useNavigate();

    // toggle button code 1
    const [isSoundOn1, setIsSoundOn1] = useState(false);
       const toggleSound1 = () => {
       setIsSoundOn1(!isSoundOn1);
    }


    const [isSoundOn2, setIsSoundOn2] = useState(false);
       const toggleSound2 = () => {
       setIsSoundOn2(!isSoundOn2);
    }


    

  return (
  <div style={{width:350}}>

        <div style={{marginLeft:-22}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>


 
     <p style={{marginLeft:10}} className='heading'>Sound assistant</p>

      <div style={{display:'flex',marginLeft:0,alignItems:'center'}}>

        <div  style={{marginLeft:0}} >
          <p className='Darktext1' style={{marginBottom:5}}>Adjust media sound in multiple apps</p>
         <p className='Lighttext' style={{marginTop:0}}>adjust sound for individual apps while multiple apps play audio simultaneously</p>
         </div>


         <div>

          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={toggleSound1} checked={isSoundOn1} />
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
              <input type="checkbox" onChange={toggleSound2} checked={isSoundOn2} />
              <span className="slider round"></span>
              </label>
              </div>


        </div>

   




    </div>
  )
}

export default Sound3