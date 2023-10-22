import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function DandB2() {

    const navigate=useNavigate();

    const [sliderValue1, setSliderValue1] = useState(50);
    const handleSliderChange1 = (event) => {
        setSliderValue1(event.target.value);
      };
    

    const [isBrightOn1, setIsBrighteOn1] = useState(false);
       const toggleBright1 = () => {
       setIsBrighteOn1(!setIsBrighteOn1);
    }


    const [isBrightOn2, setIsBrighteOn2] = useState(false);
       const toggleBright2 = () => {
       setIsBrighteOn2(!setIsBrighteOn2);
    }


    //for brightness 1

    const [brightness, setBrightness] = useState(100);

  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
  };

  const overlayStyle = {
    background: `rgba(0, 0, 0, ${(100 - brightness) / 100})`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
  };


  return (
    <div style={{ width:350}}>

       <div style={{marginLeft:10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    
        <p className='heading' style={{marginLeft:30}}>Brightness level</p>


      
      <div className="overlay" style={overlayStyle}></div>
    


    <div style={{marginLeft:0}}>
        <p className='Darktext1' style={{marginLeft:30}}>Screen brightness</p>

        <div className="brightness-slider " style={{marginLeft:30}}>
        <input
          type="range"
          min="1"
          max="100"
          value={brightness}
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
              <input  type="checkbox" onChange={toggleBright1} checked={setIsBrighteOn1} style={{width:100}} />
              <span  className="slider round"></span>
              </label>
    </div>


    <div style={{display:'flex', marginLeft:30, alignItems:'center' ,justifyContent:'space-between'}}>

        <div style={{marginLeft:0, width:250 }}>
            <p style={{marginLeft:0,marginBottom:0}} className='Darktext1'>Sunlight mode</p>
        <p style={{marginLeft:0,marginTop:0}} className='Lighttext'>Adjust brightness to strong ambient light to prevent the screen from going too dark</p>
        
        </div>
        
        <label style={{marginLeft:0}} className="switch">
              <input  type="checkbox" onChange={toggleBright2} checked={isBrightOn2} style={{width:100}} />
              <span  className="slider round"></span>
              </label>
    </div>







    </div>
  )
}

export default DandB2