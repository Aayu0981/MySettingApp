import React from 'react'
import { useState , useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Notification2() {

  const navigate=useNavigate();
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsSmarthomeOn(response.data.notifications.smarthome);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


    const [isSmarthomeOn, setIsSmarthomeOn] = useState(false);
    const toggleSmarthome = () => {
    setIsSmarthomeOn(!isSmarthomeOn);
 }


 useEffect(() => {

  const post = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/smarthometogle`, {
        tog: `${isSmarthomeOn}`
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error toggling airplane mode', error.message);
    }
  };

  post();


}, [isSmarthomeOn])


  return (
    <div style={{width:350}}>

      

      <div style={{marginLeft:0}}onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>


        <p className='heading' style={{marginLeft:30}}>Additional cards</p>

        <div className='Modes' style={{marginLeft:30}}>
            <p className='Darktext1'  style={{marginLeft:0}}>Smart home</p>
            <label className="switch">
              <input type="checkbox" onChange={toggleSmarthome} checked={isSmarthomeOn.smarthome} />
              <span className="slider round"></span>
              </label>
            
        </div>
    </div>
  )
}

export default Notification2