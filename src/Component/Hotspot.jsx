import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

function Hotspot() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setIsHotspotOn(response.data.hotspot.mode);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    

    const [isHotspotOn, setIsHotspotOn] = useState(false);
const togglehotspot =async () => {
setIsHotspotOn(!isHotspotOn);

}

useEffect(() => {
  const post = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/hotspottogle`, {
        tog: `${isHotspotOn}`
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error toggling airplane mode', error.message);
    }

  }
  post();
}, [isHotspotOn]);

  return (
    <div style={{width:350}}>

<div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>


        <p style={{marginLeft:10}} className='heading'> Portable hotspot</p>

        <div  className='Modes'>

            <div  style={{marginLeft:0}}><p className='Darktext1' style={{marginBottom:0}}>Portable hotspot</p>
            <p className='Lighttext' style={{marginTop:0}}>poco M4 pro</p></div>
            


            <label className="switch">
              <input type="checkbox" onChange={togglehotspot} checked={isHotspotOn} />
              <span className="slider round"></span>
              </label>


        </div>


        <div className='Modes'  onClick={()=> navigate('/Hotspot2')} >
            <p className='Darktext1'>Set up portable hotspot</p>
            <p className='Lighttext'>&gt;</p>
        </div>












    </div>
  )
}

export default Hotspot
