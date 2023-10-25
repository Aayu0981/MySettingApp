import React from 'react'
import { useState,useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function DandB2({setBrightness}) {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';
   
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setSliderValue1(response.data.display.brightness.level);
        setBrightness(response.data.display.brightness.level);
        setIsBrighteOn1(response.data.display.brightness.autobrightness);
        setIsBrighteOn2(response.data.display.brightness.sunlightmode)
  
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    
    const [sliderValue1, setSliderValue1] = useState(50);
    const handleSliderChange1 = (event) => {
        setSliderValue1(event.target.value);
      };

      useEffect(() => {
        const post = async () => {
          try {
            const response = await axios.post(`${BASE_URL}/brightnesstogle`, {
              tog: `${sliderValue1}`
            });
            console.log(response.data);
          } catch (error) {
            console.error('Error toggling airplane mode', error.message);
          }
    
        }
        post();
      }, [sliderValue1]);
    

    const [isBrightOn1, setIsBrighteOn1] = useState(false);
       const toggleBright1 = () => {
       setIsBrighteOn1(!isBrightOn1);
    }

    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/autobrightnesstogle`, {
            tog: `${isBrightOn1}`
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling airplane mode', error.message);
        }
  
      }
      post();
    }, [isBrightOn1]);
  


    const [isBrightOn2, setIsBrighteOn2] = useState(false);
       const toggleBright2 = () => {
       setIsBrighteOn2(!isBrightOn2);
    }
   
    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/sunlightmodetogle`, {
            tog: `${isBrightOn2}`
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling airplane mode', error.message);
        }
  
      }
      post();
    }, [isBrightOn2]);

    //for brightness 1

    

  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
    setSliderValue1(newBrightness);
  };




  return (
    <div style={{ width:350}}>

       <div style={{marginLeft:10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    
        <p className='heading' style={{marginLeft:30}}>Brightness level</p>


      
      <div className="overlay"></div>
    


    <div style={{marginLeft:0}}>
        <p className='Darktext1' style={{marginLeft:30}}>Screen brightness</p>

        <div className="brightness-slider " style={{marginLeft:30}}>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue1}
          onChange={handleBrightnessChange}
           style={{marginLeft:0}}/>
      </div>
     

       
    </div>

    <hr style={{marginLeft:30}}/>

    <div style={{display:'flex',width:350,marginLeft:0,alignItems:'center',justifyContent:'space-between'}}>

        <div style={{marginLeft:0,marginRight:0}}>
            <p className='Darktext1' style={{marginLeft:30,marginBottom:0}}>Automatic brightness</p>
        <p className='Lighttext' style={{marginLeft:30,marginTop:0}}>Adjust brightness to ambient light to save battery</p></div>
        
        
        <label style={{marginLeft:0}}  className="switch">
              <input  type="checkbox" onChange={toggleBright1} value={isBrightOn1}checked={isBrightOn1} style={{width:100}} />
              <span  className="slider round"></span>
              </label>
    </div>


    <div style={{display:'flex', marginLeft:30, alignItems:'center' ,justifyContent:'space-between'}}>

        <div style={{marginLeft:0, width:250 }}>
            <p style={{marginLeft:0,marginBottom:0}} className='Darktext1'>Sunlight mode</p>
        <p style={{marginLeft:0,marginTop:0}} className='Lighttext'>Adjust brightness to strong ambient light to prevent the screen from going too dark</p>
        
        </div>
        
        <label style={{marginLeft:0}} className="switch">
              <input  type="checkbox" onChange={toggleBright2} value={isBrightOn2}checked={isBrightOn2} style={{width:100}} />
              <span  className="slider round"></span>
              </label>
    </div>







    </div>
  )
}

export default DandB2
