import React from 'react'
import { FaBell } from 'react-icons/fa';
import img1 from '../image/LockScreen.jpeg'
import img2 from '../image/Float.jpeg'
import img3 from '../image/Badges.jpeg'
import img4 from '../image/control.jpeg';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Notification() {
  

  const navigate=useNavigate();





  
  


//for img3

const [isImg2Enabled, setIsImg2Enabled] = useState(false);
const [isImg3Enabled, setIsImg3Enabled] = useState(false);
const [isImg1Enabled, setIsImg1Enabled]= useState(false);



const [isImg2Disable, setIsImg2Disable] = useState(false);
const [isImg3Disable, setIsImg3Disable] = useState(false);
const [isImg1Disable, setIsImg1Disable]= useState(false);


  return (
    <div  style={{width:350}}>

       
<div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
        
        <p style={{marginLeft:10}}className='heading'>Notifications & Control centre</p>
           
        
              <p className='Lighttext'>NOTIFICATION</p>


        <div  >
         
         <img src={img1}  className='comp'   onClick={() => { setIsImg2Disable(false); setIsImg3Disable(false); setIsImg1Enabled(true)}}      style={{width:100,borderRadius:20,marginLeft:0}}    />

         <img src={img2}  className='comp'   onClick={() => { setIsImg1Disable(false); setIsImg3Disable(false); setIsImg2Enabled(true)} }  style={{width:100 ,borderRadius:20}} />

         <img src={img3}   className='comp'  onClick={() => { setIsImg1Disable(false); setIsImg2Disable(false); setIsImg3Enabled(true)}  }   style={{width:100 ,borderRadius:20}} />

        </div>


        <div  className='Media' onClick={()=> navigate("/Notification1")} style={{justifyContent:'space-between'}}>
          <p className='Darktext1'>App notifications</p>
          <p className='Lighttext'>&gt;</p>
        </div>

        <div className='Media' onClick={()=> navigate("/Notification4")}  style={{justifyContent:'space-between'}}>
          <p className='Darktext1'>Notification shade</p>
          <p className='Lighttext'>&gt;</p>
        </div>

        
        <hr/>

        <p className='Lighttext'>CONTROL CENTRE</p>

        <div  className='Media'  style={{display:'flex',marginLeft:0}}>

          <div style={{marginLeft:0}}>
          <p className='Darktext1' style={{marginBottom:0}}   >Control centre style</p>
          <p className='Lighttext' style={{marginTop:0}}>Select how you'd like to display toggle and notifications</p>
          </div>
         
         <div>
          <img src={img4} style={{width:130,borderRadius:20}} />
          </div>

        </div>

        <div  className='Media' onClick={()=> navigate("/Notification2")} style={{justifyContent:'space-between'}}>
          <p className='Darktext1'>Additional cards</p>
          <p className='Lighttext'>&gt;</p>
        </div>

         
        <div  className='Media' onClick={()=> navigate("/Notification3")}>
          <p className='Darktext1'>Items shown on the lock screen after swiping down</p>
          <p className='Lighttext'>&gt;</p>
        </div>





     </div>
  )
}

export default Notification;
