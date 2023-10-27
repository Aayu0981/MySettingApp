import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';



import { Navigate, isRouteErrorResponse, useNavigate } from 'react-router-dom';


function Aboutphone1() {
  const nevigate = useNavigate()
  return (
    
   <>

         <div style={{marginLeft:15}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

   <p style={{marginLeft:30}} className='heading'>About phone </p>


  
    <div style={{position:"relative",zIndex:1,display:"flex"}}>
    <div id='left' style={{width:200,height:300,borderRadius:20,position:"relative"}}>
    <img src="https://i.imgur.com/G9wfOYe.png" className='comp' style={{backgroundColor:"transparent" ,width:100}} />
     <br />
     <span >MIUI version</span><br/>
     <p style={{fontSize:12,color:'grey', marginBottom:0}}>MIUI Global</p>
     <p style={{fontSize:12,marginTop:0,color:'grey',marginBottom:0}}>13.0.5</p>
     <p  style={{fontSize:12,color:'grey',marginTop:0 }}>Stable</p>
     <p className='up' >Update</p>
     </div>

     

     <div id='right' >
      <div className='device' style={{width:170,height:100,borderRadius:20, position: 'relative', zIndex:2}}>
      <p>Device name</p>
      <p style={{fontSize:12,color:'grey'}}>POCO M4 Pro</p>
     </div>
        

       
     <div className='storage' style={{width:180,height:155,borderRadius:20, zIndex:2}}>
     
      <p className='s1' >Storage</p><br/>
      <p className='ooccu' style={{fontSize:12,color:'grey',marginTop:50}}>Occupied</p>
      <p className='oc1'>59.1 GB<sub>/64 GB</sub></p>
      
     </div>











     
     </div>
     </div>

     <div id='MIUI'>
      <div className="config">
      <p className='Darktext1'  >MIUI version(For POCO)</p>
      <p className='about10' >MIUI Global 13.0.5 Stable</p></div>
      
     
      <div className="config"><p className='Darktext1'>Android Version</p>
      <p className='about10'>12 SP1A.21082.016</p></div>
      
      
      <div className="config"><p className='Darktext1'>Android security update</p>
      <p className='about10'>2023-04-01</p></div>
      
     
      <div className="config"   onClick={()=>nevigate("/About2")}><p className='Darktext1'>All specs</p>
      <p className='arow'>&gt;</p></div>
      
     </div>
     <hr  style={{width:400,marginLeft:30}}/>

     <div >
      <div className='config' onClick={()=>nevigate("/About3")}><p className='Darktext1'>Back up and restore</p>
      <p className='arow'>&gt;</p></div>
      
      
      <div className="config"  onClick={()=>nevigate("/About4")}><p className='Darktext1'>Factory reset</p>
      <p className='arow'>&gt;</p></div>
     
      
     </div>

        <hr   style={{width:400,marginLeft:30}}/>

     <div>
      <div className="config"  onClick={()=>nevigate("/About6")}><p className='Darktext1' >Important safety information</p>
      <p className='arow'>&gt;</p></div>
      
      <div className="config"  onClick={()=>nevigate("/About7")}><p className='Darktext1'>certification</p>
      <span className='arow'>&gt;</span></div>
      
     </div>
  



     




    
    </>
    
     

  )
}

export default Aboutphone1;
