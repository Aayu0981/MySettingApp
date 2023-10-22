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



import React, { useState } from 'react';

function Textsize() {
  // Define the slider value and its change handler
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div style={{ width: 350 }}>
      <p className='heading'>Text size</p>

      <div className='Text1'>
        <p>How do I adjust text size</p>
      </div>

      <div className='Text2'>
        <p>Try adjusting text size using the slider below</p>
      </div>

      <div className="slider-container">
        <h2>Horizontal Slider</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider"
        />

        <p>Value: {sliderValue}</p>
      </div>
    </div>
  );
}

export default Textsize;




     
