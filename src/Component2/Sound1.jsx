import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

function Sound1() {

    const navigate=useNavigate();

    const [isDandBOn1, setIsDandBOn1] = useState(false);
       const toggleDandB1 = () => {
       setIsDandBOn1(!isDandBOn1);
    }



    const [isDandBOn2, setIsDandBOn2] = useState(false);
    const toggleDandB2 = () => {
    setIsDandBOn2(!isDandBOn2);
 }


 const [isDandBOn3, setIsDandBOn3] = useState(false);
 const toggleDandB3 = () => {
 setIsDandBOn3(!isDandBOn3);
}




  return (
 <div  style={{width:350}}>
   

        <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>



      
       <p style={{marginLeft:30}} className='heading'>Do not disturb</p>
       

     <div style={{marginLeft:30}}>
         <div style={{marginLeft:0}} className='Media'>
               
                <div style={{marginLeft:0}}>
              <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Do not disturb</p>
              <p  className='Lighttext' style={{marginLeft:0,marginTop:0}}>There'll be no reminders for incoming calls and notification</p>
              </div>
              
              <label className="switch">
              <input type="checkbox" onChange={toggleDandB1} checked={isDandBOn1} style={{width:180}} />
              <span className="slider round"></span>
              </label>

         </div>

          <div style={{marginLeft:0,justifyContent:'space-between'}} className='Media'>
              <p className='Darktext1' style={{marginLeft:0}}>When device is locked</p>
              {/* toggle button add krna hai */}

              <label className="switch">
              <input type="checkbox" onChange={toggleDandB2} checked={isDandBOn2} />
              <span className="slider round"></span>
              </label>
          </div>

         <div   className='Media'>

              <div style={{marginLeft:0}}>
             <p  className='Darktext1'  style={{marginLeft:0,marginBottom:0}}>Notify about repeated calls </p>
               <p className='Lighttext'  style={{marginLeft:0,marginTop:0}}>Ring or vibration while receiving the second call from the same contact within 15 minutes</p>
               </div>

               <label className="switch">
              <input type="checkbox" onChange={toggleDandB3} checked={isDandBOn3}  style={{width:200}}/>
              <span className="slider round"></span>
              </label>
               {/* toggle button add krna hai */}
         </div>
     </div>
      
      <hr/>

       <div  className='Modes'style={{marginLeft:30}} >
           <p className='Darktext1' style={{marginLeft:0}}>Schedule turn on time</p>
           <p className='Lighttext'>&gt; off</p>
       </div>




    </div>
  )
}

export default Sound1