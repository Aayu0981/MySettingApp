import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


function Connection1() {
   
    const navigate = useNavigate();

  return (
    <div style={{width:350}}>

         
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      


     
     <p className='heading'>Additional settings</p>
      
      <p className='Lighttext'>MANAGE WI-FI CONNECTION</p>

      <div style={{display:'flex',justifyContent:'space-between'}}>

        <div style={{marginLeft:0,}}>
        <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Test network</p>
        <p className='Lighttext'style={{marginTop:0,marginLeft:0}}>Test connection for networking issues</p>
        </div>
        
        <p style={{}}>&gt;</p>
      </div>

      <div style={{display:'flex',textAlign:'center',justifyContent:'space-between'}}>
        <p className='Darktext1' style={{marginLeft:0}}>Manage saved networks</p>
        <p>&gt;</p>
      </div>



    </div>
  )
}

export default Connection1