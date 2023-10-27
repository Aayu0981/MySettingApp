// import React from 'react'
// import { useState } from 'react';

// function Textsize() {


//     const SliderComponent = () => {
//         const [sliderValue, setSliderValue] = useState(50); // Initial slider value

//     }
        

//   const handleSliderChange = (event) => {
//     setSliderValue(event.target.value);
//   };


//   return (
//     <div style={{width:350}}>

//         <p className='heading'>Text size</p>


//         <div className='Text1'>
//             <p>How do I adjust text size</p>
//         </div>


//         <div className='Text2'>
//             <p>Try adjusting text size using the slider below</p>
//         </div>


         
//         <div className="slider-container">
//       <h2>Horizontal Slider</h2>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={sliderValue}
//         onChange={handleSliderChange}
//         className="slider"
//       />

//       <p>Value: {sliderValue}</p>
//     </div>







//     </div>
//   )
// }


// export default Textsize;



import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import { FaArrowLeft } from 'react-icons/fa';

function Textsize() {

  const navigate=useNavigate();
  // Define the slider value and its change handler
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setSliderValue(response.data.display.textsize);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/textsizetogle`, {
          tog: `${sliderValue}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }
    }
    post();
  }, [sliderValue]);


  return (
    <div style={{ width: 350 }}>



<div style={{marginLeft:-10}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    

      <p className='heading'>Text size</p>

      <div className='Text1'>
        <p>How do I adjust text size</p>
      </div>

      <div className='Text2'>
        <p>Try adjusting text size using the slider below</p>
      </div>


      <div  style={{marginTop:50}}>
      <div className="slider-container" >
        <h2>Horizontal Slider</h2>

        <div >
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
           style={{width:250, marginTop:430,marginLeft:120}}/>

</div>
         

        <p  style={{marginTop:40}}>Value: {sliderValue}</p>
      </div>
      </div>
    </div>
  );
}

export default Textsize;




     
