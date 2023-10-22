import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


function DandB4() {

  const nevigate=useNavigate();
  return (
    <div  style={{width:350}}>

      
<div style={{marginLeft:10}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
        
        <p className='heading' style={{marginLeft:30}}>When device is in VR</p>

        <div style={{borderRadius:30,backgroundColor:'grey',width:300,paddingTop:5,paddingBottom:5,textAlign:'center'}}>
            <p>Reduce blur (recommended)</p>
        </div>



        
        <div style={{borderRadius:30,backgroundColor:'grey',width:300,paddingTop:5,paddingBottom:5,textAlign:'center',marginTop:30}}>
            <p>Reduce flicker</p>
        </div>







    </div>
  )
}

export default DandB4