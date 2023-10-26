import React, { useEffect } from 'react'
import { FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Dark from '../image/Dark2.jpeg'
import Light from '../image/light.jpeg'
import axios from 'axios';

function DandB({setDarkModeOn}) {

  const navigate=useNavigate();
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsDisplayOn(response.data.display.autorotate);
      setDarkModeOn(response.data.display.darkmode);
      setdarkmode(response.data.display.darkmode);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [isDisplayOn, setIsDisplayOn] = useState(false);
  const toggleDisplay = async () => {
  setIsDisplayOn(!isDisplayOn);
};

useEffect(() => {
  const post = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/autorotatemodetogle`, {
        tog: `${isDisplayOn}`
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error toggling airplane mode', error.message);
    }

  }
  post();
}, [isDisplayOn]);

const [darkmode,setdarkmode]=useState(false);

const enabledarkmode=()=>{
  setdarkmode(true);
  setDarkModeOn(true)
}
const disabledarkmode=()=>{
  setdarkmode(false);
  setDarkModeOn(false);
}

  return (
    <div style={{width:350}}>

      <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
      
      <p className='heading'>Display</p>

        <p className='Lighttext'>COLOR SCHEME</p>

        <div  style={{display:'flex'}}>
            
        <div style={{marginLeft:0}} onClick={disabledarkmode} id='darkmode' className={darkmode===false?'makeactive':"oo"}>
            <img src={Light} style={{width:130 , marginLeft:0}} />
            <p className='Darktext1' style={{marginLeft:22,marginTop:8}}>Light mode</p>
          </div>

          <div style={{marginLeft:0}} onClick={enabledarkmode} id='darkmode' className={darkmode===true?'makeactive':"oo"}>
            <img src={Dark} style={{width:130,height:160}} />
            <p className='Darktext1' style={{marginLeft:40,marginTop:8}}>Dark mode</p>
          </div>
        </div>

        <div className='Modes'   onClick={()=> navigate("/DandB1")}  >
          <p className='Darktext1'>Sehedule Dark mode</p>
          <p className='Lighttext'>Off &gt;</p>
        </div>
        <hr/>


        <p  className='Lighttext' >SCREEN</p>

        <div   className='Modes'  onClick={()=> navigate("/DandB2")}>
          <p className='Darktext1'>Brightness level</p>
          <p  className='Lighttext'>&gt;</p>
        </div>



        <div   className='Modes'  onClick={()=> navigate("/DandB3")}>
          <p className='Darktext1'> Reading mode</p>
          <p className='Lighttext'>on&gt;</p>
        </div>
         

        <div  className='Modes' >
          <p className='Darktext1'>Refresh rate</p>
          <p className='Lighttext'>60 Hz</p>
        </div>
        
        <hr/>
        <p className='Lighttext'>FONT</p>

        <div className='Modes' onClick={()=> navigate("/Textsize")}>
          <p className='Darktext1'>Text size</p>
          <p className='Lighttext'> &gt;</p>
        </div>

        <hr/>

        <p  className='Lighttext'>SYSTEM</p>

        <div   className='Modes'  onClick={()=> navigate("/DandB4")}>
          <p className='Darktext1'>When device is in VR</p>
          <p className='Lighttext'>&gt;</p>
        </div>


        <div  className='Modes' >
          <p  className='Darktext1'>Auto-rotate screen</p>
          
          <label className="switch">
              <input type="checkbox" onChange={toggleDisplay} checked={isDisplayOn} />
              <span className="slider round"></span>
              </label>
       

        </div>


        
     </div>
  );
}

export default DandB;
