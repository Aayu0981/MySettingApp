import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Bluetooth1() {

    const navigate=useNavigate();

// toggle button code 1
const [isPairOn1, setIsPairOn1] = useState(false);
const togglePair1 = () => {
setIsPairOn1(!isPairOn1);
}

const [isPairOn2, setIsPairOn2] = useState(false);
const togglePair2 = () => {
setIsPairOn2(!isPairOn2);
}

  return (
    <div style={{width:350}}>
           

        <div style={{marginLeft:0}}onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      

       <p className='heading' style={{marginLeft:20}}>Additional settings</p>

       <p  className='Lighttext'>CONNECTION</p>
     <div  style={{marginLeft:0}}>
         <div className='Media' >
            <div>
          <p className='Darktext1' style={{marginBottom:0 ,marginLeft:0}}> Pair compatible device</p>
          <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Quickly connect earnphone, speakers, and other compatible device</p>
          </div>

          {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={togglePair1} checked={isPairOn1}  style={{width:100}}/>
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
              <input type="checkbox" onChange={togglePair2} checked={isPairOn2}  style={{width:100}}/>
              <span className="slider round"></span>
              </label> 

        </div>





    </div>
  )
}

export default Bluetooth1