import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';



function Connection() {

  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:4000';


  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIswifiOn(response.data.wifi);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [iswifiOn, setIswifiOn] = useState(false);
  const togglewifi = () => {
    setIswifiOn(!iswifiOn);
  }

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/wifitogle`, {
          tog: `${iswifiOn}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }

    }
    post();
  }, [iswifiOn]);

  return (
    <div style={{ width: 350 }} >


      <div style={{ marginLeft: 0 }} onClick={() => navigate(-1)}>
        <p><FaArrowLeft /></p>
      </div>




      <p style={{ marginLeft: 30 }} className='heading'>Wi-Fi</p>

      <div style={{ marginLeft: 17 }} className='Modes'>
        <p className='Darktext1'  >Wi-Fi</p>

        <label className="switch">
          <input type="checkbox" onChange={togglewifi} checked={iswifiOn} />
          <span className="slider round"></span>
        </label>

      </div>

      <hr style={{ marginLeft: 30 }} />


      <p className='Lighttext' style={{ marginTop: 20, marginLeft: 30 }}>MORE SETTINGS</p><br />


      <div style={{ marginLeft: 20 }} className='Modes' onClick={() => navigate("/Connection1")} >
        <p className='Darktext1' style={{ marginTop: 0 }}>Additional settings</p>
        <p className='Lighttext' style={{ marginTop: 0 }}>&gt;</p>
      </div>






    </div>
  )
}

export default Connection;
