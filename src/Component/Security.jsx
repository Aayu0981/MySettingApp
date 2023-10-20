import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Security() {
  const navigate = useNavigate();

    return (
      
        <div style={{width:400}} >

               
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
             
        <p className='heading '>Security status</p>


          <div   style={{marginLeft:0}} > 
            <div className='Media'  style={{justifyContent:'space-between'}}><p className='Darktext1'   >Find device</p>
            <p className='Lighttext'>On</p>
            </div>
            
             
             <div  className= 'Media' style={{justifyContent:'space-between'}}><p className='Darktext1' >Security update</p>
            <p className='Lighttext'>2023-04-01</p></div>
            
             
             <div   className= 'Media' style={{justifyContent:'space-between'}} onClick={()=>navigate("/Security1")} ><p className='Darktext1'>Google Play Protect</p>
            <p className='Lighttext'>&gt;</p></div>
            
            
          
          </div>
          
          
          
          
          
      
           
        </div>
    )
}

export default Security;
