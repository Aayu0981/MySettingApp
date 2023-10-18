import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


function Connection1() {
   
    const navigate = useNavigate();

  return (
    <div>

         
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      


     
     <div><span>Additional settings</span></div>
      
      <p>MANAGE WI-FI CONNECTION</p>

      <div>
        <h4>Test network</h4>
        <p>Test connection for networking issues</p>
        <span>&gt;</span>
      </div>

      <div>
        <h4>Manage saved networks</h4>
        <span>&gt;</span>
      </div>



    </div>
  )
}

export default Connection1