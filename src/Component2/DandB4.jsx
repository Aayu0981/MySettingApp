import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';

function DandB4() {

  const nevigate=useNavigate();

  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setshade(response.data.display.vrmode);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const [vrMode, setVrMode] = useState("Reduce Blur");
  const togleToReduceFlicker = async () => {
    setVrMode("Reduce Flicker");
  }
  const togleToReduceBlur = async () => {
    setVrMode("Reduce Blur");
  }

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/vrmodetogle`, {
          tog: `${vrMode}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }

    }
    post();
    
  }, [vrMode]);

  return (
    <div  style={{width:350}}>

      
<div style={{marginLeft:10}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
        
        <p className='heading' style={{marginLeft:30}}>When device is in VR</p>

        <div  onClick={togleToReduceBlur} className={vrMode==="Reduce Blur"?'compactive':"comp"}>
            <p>Reduce blur (recommended)</p>
        </div>



        
        <div style={{marginTop:30}} className={vrMode==="Reduce Flicker"?'compactive':"comp"} onClick={togleToReduceFlicker}>
            <p>Reduce flicker</p>
        </div>







    </div>
  )
}

export default DandB4
