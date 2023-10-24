import React from 'react'
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DandB1() {

  const navigate=useNavigate();
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsdarkModeOn(response.data.display.darkmode);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [isdarkModeOn, setIsdarkModeOn] = useState(false);
  const toggledarkMode = () => {
  setIsdarkModeOn(!isdarkModeOn);
}

useEffect(() => {

  const post = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/darkmodetogle`, {
        tog: `${isdarkModeOn}`
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error toggling airplane mode', error.message);
    }
  };

  post();


}, [isdarkModeOn])

  return (
    <div style={{width:350}}>

         <div style={{marginLeft:10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
      

      <p className='heading' style={{marginLeft:30}}>Schedule Dark mode</p>

      <div className='Modes'>
        <p className='Darktext1' style={{marginLeft:30}}>Schedule Dark mode</p>

        <label className="switch">
              <input type="checkbox" onChange={ toggledarkMode} checked={isdarkModeOn} />
              <span className="slider round"></span>
              </label>

      </div>
    </div>
  )
}

export default DandB1
