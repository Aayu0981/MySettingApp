import React from 'react'
import img1 from '../image/certificate.jpg'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function About7() {
  const nevigate=useNavigate();
  return (
    <div  style={{width:350}}>

      
<div style={{marginLeft:0}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    
    <p style={{marginLeft:20}} className='heading'>Certification</p>


    <div>
         
         <img src={img1} style={{width:400,height:440}} />

      
    </div>






    </div>
  )
}

export default About7