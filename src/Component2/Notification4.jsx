import React from 'react'
import img5 from '../image/MIUI.jpeg'
import img6 from '../image/Android.jpeg'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Notification4() {
  const nevigate=useNavigate();

  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setshade(response.data.notifictionshade);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const [notificationShade, setshade] = useState("MIUI");
  const togleAndroidMode = async () => {
    setshade("Android");
  }
  const togleMiuiMode = async () => {
    setshade("MIUI");
  }

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/notificationshadetogle`, {
          tog: `${notificationShade}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }

    }
    post();
    
  }, [notificationShade]);
     

  return (
    <div style={{maxWidth:350,marginLeft:0}}>

      
<div style={{marginLeft:15}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

        <div style={{fontSize:30,fontWeight:100}}><span >Notification shade</span></div>

        <p style={{fontSize:13,color:'grey',marginLeft:30,marginTop:30,marginBottom:30}}>NOTIFICATION STYLE</p>

        <div style={{display:'flex' ,marginLeft:0}}>

            <div style={{textAlign:'center'}} id='darkmode' onClick={togleMiuiMode} className={notificationShade==="MIUI"?'makeactive':"oo"}>
            <img src={img6} style={{width:200,borderRadius:20}} /> 
            <p className='Darktext1'>MIUI</p>
            </div>
            
            <div  style={{textAlign:'center',marginLeft:0}} id='darkmode' onClick={togleAndroidMode} className={notificationShade==="Android"?'makeactive':"oo"}>
            <img src={img5} style={{width:200,borderRadius:20}} />
            <p className='Darktext1'>Android</p>
            </div>

        </div>






    </div>
  )
}

export default Notification4
