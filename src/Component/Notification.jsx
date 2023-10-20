import React from 'react'
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import img1 from '../image/LockScreen.jpeg'
import img2 from '../image/Float.jpeg'
import img3 from '../image/Badges.jpeg'
import img4 from '../image/control.jpeg';

function Notification() {

  const navigate=useNavigate();
  return (
    <div  style={{width:400}}>
        
        <p className='heading'>Notifications & Control centre</p>
           
        
              <p className='Lighttext'>NOTIFICATION</p>


        <div>
         
         <img src={img1} style={{width:100,borderRadius:20,marginLeft:0}} />

         <img src={img2} style={{width:100 ,borderRadius:20}} />

         <img src={img3} style={{width:100 ,borderRadius:20}} />

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
          <p className='Darktext1' style={{marginBottom:0}}>Control centre style</p>
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