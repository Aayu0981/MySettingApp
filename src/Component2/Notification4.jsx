import React from 'react'
import img5 from '../image/MIUI.jpeg'
import img6 from '../image/Android.jpeg'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Notification4() {
  const nevigate=useNavigate();
  return (
    <div style={{maxWidth:350,marginLeft:0}}>

      
<div style={{marginLeft:15}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

        <div style={{fontSize:30,fontWeight:100}}><span >Notification shade</span></div>

        <p style={{fontSize:13,color:'grey',marginLeft:30,marginTop:30,marginBottom:30}}>NOTIFICATION STYLE</p>

        <div style={{display:'flex' ,marginLeft:0}}>

            <div style={{textAlign:'center'}}>
            <img src={img6} style={{width:200,borderRadius:20}} /> 
            <p className='Darktext1'>MIUI</p>
            </div>
            
            <div  style={{textAlign:'center',marginLeft:0}}>
            <img src={img5} style={{width:200,borderRadius:20}} />
            <p className='Darktext1'>Android</p>
            </div>

        </div>






    </div>
  )
}

export default Notification4