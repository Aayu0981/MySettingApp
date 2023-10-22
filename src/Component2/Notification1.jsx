import React from 'react'
import { FaDocker, FaGoogle, FaGoogleDrive, FaMap, FaMapMarked, FaMapSigns, FaPage4, FaPagelines, FaPager, FaPhone } from 'react-icons/fa'
import { useState } from 'react';
import img1 from '../image/Phone.png'
import img2 from '../image/Map.jpg'
import img3 from '../image/google.png'
import img4 from '../image/Msg.png'
import img5 from '../image/Truecaller.png'
import img6 from '../image/Calculator.png'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Notification1() {

  const nevigate=useNavigate();

    const [isNotificationOn1, setIsNotificationOn1] = useState(false);
    const toggleNotification1 = () => {
    setIsNotificationOn1(!isNotificationOn1);
 }

 const [isNotificationOn2, setIsNotificationOn2] = useState(false);
 const toggleNotification2 = () => {
 setIsNotificationOn2(!isNotificationOn2);
}

const [isNotificationOn3, setIsNotificationOn3] = useState(false);
const toggleNotification3 = () => {
setIsNotificationOn3(!isNotificationOn3);
}

const [isNotificationOn4, setIsNotificationOn4] = useState(false);
const toggleNotification4 = () => {
setIsNotificationOn4(!isNotificationOn4);
}


const [isNotificationOn5, setIsNotificationOn5] = useState(false);
const toggleNotification5 = () => {
setIsNotificationOn5(!isNotificationOn5);
}


const [isNotificationOn6, setIsNotificationOn6] = useState(false);
const toggleNotification6= () => {
setIsNotificationOn6(!isNotificationOn6);
}


const [isNotificationOn7, setIsNotificationOn7] = useState(false);
const toggleNotification7 = () => {
setIsNotificationOn7(!isNotificationOn7);
}





  return (
    <div style={{width:350}}>


<div style={{marginLeft:0}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
   <p style={{marginLeft:10}}className='heading'>Notification </p>
     


  < div id='box1' >
      <label className="input-label">
       <span className="search-icon" >&#128269;</span>

         <input id='searchbox' type="text" placeholder="Search settings" />
       </label>
    </div>

    <br/>
    <p className='Lighttext' style={{marginTop:0}}>SORT BY TIME RECEIVED</p>
    {/* vo button deni h */}


    <div className='Modes'>
        
        <div className='Media'>
          <img src={img1} style={{width:40}}/>
        <p className='Darktext1'>Google</p>

        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleNotification1} checked={isNotificationOn1} />
              <span className="slider round"></span>
              </label>
    </div>
   


    <div className='Modes' style={{marginTop:20}}>

      <div className='Media'>
        <img src={img2} style={{width:30,backgroundColor:'white'}} />
        <p className='Darktext1'>Phone</p>

        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleNotification2} checked={isNotificationOn2} />
              <span className="slider round"></span>
              </label>
    </div>


    
    <div className='Modes' style={{marginTop:20}}>

      <div className='Media'>
      <img src={img3} style={{width:35,backgroundColor:'white'}} />
        <p className='Darktext1'>Google</p></div>
       
     
              
        <label className="switch">
              <input type="checkbox" onChange={toggleNotification3} checked={isNotificationOn3} />
              <span className="slider round"></span>
              </label>
    </div>

    <div className='Modes' style={{marginTop:20}}>

       <div  className='Media'> 
       <img src={img4} style={{width:35,backgroundColor:'white'}} />
        <p className='Darktext1'>Messages</p></div>
       
        
        <label className="switch">
              <input type="checkbox" onChange={toggleNotification4} checked={isNotificationOn4} />
              <span className="slider round"></span>
              </label>
    </div>

    <div className='Modes' style={{marginTop:20}}>

        <div  className='Media'> 
          <img src={img5} style={{width:35,backgroundColor:'white'}} />
           <p className='Darktext1'>Messages</p></div>

 
        <label className="switch">
           <input type="checkbox" onChange={toggleNotification5} checked={isNotificationOn5} />
          <span className="slider round"></span>
          </label>
      </div>

      <div className='Modes' style={{marginTop:20}}>

<div  className='Media' > 
<img src={img6} style={{width:35,backgroundColor:'white'}} />
 <p className='Darktext1'>Messages</p></div>

 
 <label className="switch">
       <input type="checkbox" onChange={toggleNotification6} checked={isNotificationOn6} />
       <span className="slider round"></span>
       </label>
</div>


   









    </div>
  )
}

export default Notification1