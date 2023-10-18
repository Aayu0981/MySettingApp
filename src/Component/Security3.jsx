import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


function Security3() {

 const navigate=useNavigate();

  return (
    <div>

      
       <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
       

        <h1>This is google play update page</h1>
    </div>
  )
}

export default Security3