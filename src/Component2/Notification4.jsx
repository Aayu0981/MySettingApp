import React from 'react'
import img5 from '../image/MIUI.jpeg'
import img6 from '../image/Android.jpeg'

function Notification4() {
  return (
    <div style={{maxWidth:400,marginLeft:0}}>

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