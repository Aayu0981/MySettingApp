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


  return (
    <div style={{width:400, width:350}}>

       <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    
        <p className='heading'>Brightness level</p>


    <div style={{marginLeft:0}}>
        <p className='Darktext1' style={{marginLeft:0}}>Screen brightness</p>

        <input style={{marginLeft:0}} type="range" min="0" max="100" value={sliderValue1} onChange={handleSliderChange1} className="sound" />
        {/* vo scroll bali button add krna hai */}
    </div>

    <hr style={{marginLeft:0}}/>

    <div style={{display:'flex',width:350,marginLeft:0,alignItems:'center',justifyContent:'space-between'}}>

        <div style={{marginLeft:0,marginRight:0}}>
            <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Automatic brightness</p>
        <p className='Lighttext' style={{marginLeft:0,marginTop:0}}>Adjust brightness to ambient light to save battery</p></div>
        
        
        <label style={{marginLeft:0}}  className="switch">
              <input  type="checkbox" onChange={toggleBright1} checked={setIsBrighteOn1} style={{width:100}} />
              <span  className="slider round"></span>
              </label>
    </div>


    <div style={{display:'flex', marginLeft:0, alignItems:'center'}}>

        <div style={{marginLeft:0, width:250}}>
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