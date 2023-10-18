import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function Sound1() {

    const navigate=useNavigate();

  return (
 <div>
   

        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>



      <div>
       <span>Do not disturb</span>
        </div>

     <div>
         <div>
              <p>Do not disturb</p>
              <p>There'll be no reminders for incoming calls and notification</p>
               {/* toggle button add krna hai */}
         </div>

          <div>
              <p>When device is locked</p>
              {/* toggle button add krna hai */}
          </div>

         <div>
             <p>Notify about repeated calls </p>
               <p>Ring or vibration while receiving the second call from the same contact within 15 minutes</p>
               {/* toggle button add krna hai */}
         </div>
     </div>
      
      <hr/>

       <div >
           <p>Schedule turn on time</p>
           <span>&gt; off</span>
       </div>




    </div>
  )
}

export default Sound1