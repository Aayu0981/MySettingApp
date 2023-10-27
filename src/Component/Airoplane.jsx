import React from 'react'
 import { FaAirbnb, FaArrowLeft, FaFontAwesome, FaFontAwesomeLogoFull, FaPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';


function Airoplane() {
const navigate=useNavigate();
const BASE_URL = 'http://localhost:4000';

const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getUserData`);
    setIsAirplaneModeOn(response.data.airplanemode);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

useEffect(() => {
  fetchData();
}, []);



const [isAirplaneModeOn1, setIsAirplaneModeOn] = useState(false);
       const toggleAirplaneMode = async () => {
       setIsAirplaneModeOn(!isAirplaneModeOn1);
        }

    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/airplanemodetogle`, {
            tog: `${isAirplaneModeOn1}`
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling airplane mode', error.message);
        }
  
      }
      post();
    }, [isAirplaneModeOn1]);


  return (
    <div style={{width:350}} >
         
         <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

        <p className='heading' style={{marginLeft:30}}>Aeroplane Mode</p>

        <div  className='Media' style={{justifyContent:'space-between'}}>
          <p className='Darktext1' style={{marginLeft:30}}>Aeroplane Mode</p>
          <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn1} />
              <span className="slider round"></span>
              </label>

        </div>





      
     </div>
  )
}

export default Airoplane;


 
