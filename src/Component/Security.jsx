import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Security() {
  const navigate = useNavigate();

    return (
      
        <div style={{marginLeft:30}} >

               
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
             
        <div  style={{fontSize:30, fontWeight: 100, marginTop: 50, marginBottom:20,marginLeft:30}}><span>Security status</span></div>


          <div > 
            <div style={{display:'flex',width:280,justifyContent:'space-between'}}><h4 >Find device</h4>
            <p style={{fontWeight:20,fontSize:13}}>On</p></div>
            
             
             <div style={{display:'flex',width:280,justifyContent:'space-between'}}><h4 >Security update</h4>
            <p style={{fontWeight:20,fontSize:13}}>2023-04-01</p></div>
            
             
             <div  onClick={()=>navigate("/Security1")} style={{display:'flex',width:280,justifyContent:'space-between'}}><h4>Google Play Protect</h4>
            <p className='arow'>&gt;</p></div>
            
              <div  onClick={()=>navigate("/Security3")} style={{display:'flex',width:280,justifyContent:'space-between'}} >  <h4>Google Play system update</h4>
            <p className='arow'>&gt;</p></div>
          
          </div>
          
          
          
          
          
      
           
        </div>
    )
}

export default Security;
