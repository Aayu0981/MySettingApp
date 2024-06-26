import React from 'react'
import { FaDocker, FaGoogle, FaGoogleDrive, FaMap, FaMapMarked, FaMapSigns, FaPage4, FaPagelines, FaPager, FaPhone } from 'react-icons/fa'
import { useState,useEffect } from 'react';
import img1 from '../image/Phone.png'
import img2 from '../image/Map.jpg'
import img3 from '../image/google.png'
import img4 from '../image/Msg.png'
import img5 from '../image/Truecaller.png'
import img6 from '../image/Calculator.png'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Notification1() {

  const nevigate=useNavigate();
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsNotificationOn({
        notification1:response.data.notifications.notification1,
        notification2:response.data.notifications.notification2,
        notification3:response.data.notifications.notification3,
        notification4:response.data.notifications.notification4,
        notification5:response.data.notifications.notification5,
        notification6:response.data.notifications.notification6
    });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const initialState={
    notification1:false,
    notification2:false,
    notification3:false,
    notification4:false,
    notification5:false,
    notification6:false,

  }


const [isNotificationOn, setIsNotificationOn] = useState(initialState);


  function toggleNotification(e) {
    const { name, checked } = e.target;
    setIsNotificationOn(prevState => ({ ...prevState, [name]: checked }));
  }

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/notificationtogle`, isNotificationOn);
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }
    };
    post();
  }, [isNotificationOn]);




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
        <p className='Darktext1'>Phone</p>

        </div>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleNotification(e)} name='notification1' value={isNotificationOn.notification1} checked={isNotificationOn.notification1} />
              <span className="slider round"></span>
              </label>
    </div>
   


    <div className='Modes' style={{marginTop:20}}>

      <div className='Media'>
        <img src={img2} style={{width:30,backgroundColor:'white'}} />
        <p className='Darktext1'>Location</p>

        </div>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleNotification(e)} name='notification2'  checked={isNotificationOn.notification2} />
              <span className="slider round"></span>
              </label>
    </div>


    
    <div className='Modes' style={{marginTop:20}}>

      <div className='Media'>
      <img src={img3} style={{width:35,backgroundColor:'white'}} />
        <p className='Darktext1'>Google</p></div>
       
     
              
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleNotification(e)} name='notification3' checked={isNotificationOn.notification3} />
              <span className="slider round"></span>
              </label>
    </div>

    <div className='Modes' style={{marginTop:20}}>

       <div  className='Media'> 
       <img src={img4} style={{width:35,backgroundColor:'white'}} />
        <p className='Darktext1'>Messages</p></div>
       
        
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleNotification(e)}name='notification4' checked={isNotificationOn.notification4} />
              <span className="slider round"></span>
              </label>
    </div>

    <div className='Modes' style={{marginTop:20}}>

        <div  className='Media'> 
          <img src={img5} style={{width:35,backgroundColor:'white'}} />
           <p className='Darktext1'>Truecaller</p></div>

 
        <label className="switch">
           <input type="checkbox" onChange={(e)=>toggleNotification(e)} name='notification5' checked={isNotificationOn.notification5} />
          <span className="slider round"></span>
          </label>
      </div>

      <div className='Modes' style={{marginTop:20}}>

<div  className='Media' > 
<img src={img6} style={{width:35,backgroundColor:'white'}} />
 <p className='Darktext1'>Calculator</p></div>

 
 <label className="switch">
       <input type="checkbox" onChange={(e)=>toggleNotification(e)}name='notification6' checked={isNotificationOn.notification6} />
       <span className="slider round"></span>
       </label>
</div>


   









    </div>
  )
}

export default Notification1
