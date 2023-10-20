// import React from 'react'
// import { FaBell, FaClock, FaFonticons, FaFootballBall, FaMusic, FaPhoneAlt, FaReadme, FaRegBell, FaRing, FaSoundcloud, FaUserLock, FaVolumeUp,FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



// function Sound() {
//   const navigate = useNavigate();

//  // slider for sound 
//             const [sliderValue1, setSliderValue1] = useState(50); // Initial slider value
//             const handleSliderChange1 = (event) => {
//             setSliderValue1(event.target.value); };

//             const [sliderValue2, setSliderValue2] = useState(30); // Initial slider value
//             const handleSliderChange2 = (event) => {
//             setSliderValue2(event.target.value); };


//             const [sliderValue3, setSliderValue3] = useState(60); // Initial slider value
//             const handleSliderChange3 = (event) => {
//             setSliderValue3(event.target.value); };

//   return (
//     <div >

        
//          <div onClick={()=> navigate(-1)}>
//             <p><FaArrowLeft/></p>
//          </div>


        
//     <div><span>Sound & vibration</span></div>

//     <div style={{display:'flex'}}>
//     <div style={{backgroundColor:'red',width:150,height:170,borderRadius:30}}>
//       <FaBell style={{marginTop:30}}/>
//       <p>Notifications</p>
//       <p>Droplets</p>
//     </div>


//     <div>
//     <div  style={{backgroundColor:'red',width:180,height:100,borderRadius:30}}>
//       <FaPhoneAlt/>
//       <p>Ringtone</p>
//       <p>POCO</p>
//     </div>

//     <div  style={{backgroundColor:'red',width:180,height:100,borderRadius:30}}>
//      <FaClock/>
//       <p>Alarm</p>
//       <p>Daydream</p>
//     </div>
//     </div>
//     </div>

//     <div>
//       <p>Adjust volume</p>
//       <br/>

//       <div>
//         <FaMusic/> Media 
//         <div className="Sound-slider">
//       <input type="range" min="0"  max="100"  value={sliderValue1}  onChange={handleSliderChange}className="sound"  />
//         </div>

//       </div>



//       <div>
//         <FaBell/> Ringtone 
//         <div className="Ringtone">
//          <input type="range" min="0"  max="100"  value={sliderValue2}  onChange={handleSliderChange}className="Ringtone" />
//          </div>

//          </div>



//       <div>
//         <FaClock/> Alarm 
//         <div className="Alarm">
//          <input type="range" min="0"  max="100"  value={sliderValue3}  onChange={handleSliderChange}className="Alarm" />
//          </div>
         

//       </div>

//     </div>

//     <div onClick={()=>navigate("/Sound3")}> 
//       <p>Sound assistant</p>
//       <p>Customise your sound setting</p>
//       <span className="arow">&gt;</span>
//     </div>
    
//     <hr/>

//     <div>
//       <p>SILENT MODE</p><br/>
       
//        <div>
//       <p>Silent mode</p>
//       <p>Silence incoming calls and notifications</p>
//       </div>

//       <div>
//         <p>Silence media in Silent mode</p>
//         <p>Games, music, videos, and other apps</p>
//       </div>

//       <div  onClick={()=>navigate("/Sound1")}>
//         <p>Do not disturb</p>
//         <p>There'll be no reminders for incoming calls
//           and notifications
//         </p>
//         <span className="arow">&gt;</span>
//       </div>

//       <div onClick={()=>navigate("/Sound2")} >
//         <p>Additional settings</p>
//         <span className="arow">&gt;</span>
//       </div>
//     </div>






//    </div>
//   )
// }

// export default Sound;


import React from 'react';
import { FaArrowLeft, FaBell, FaClock, FaMusic, FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Sound() {
  const navigate = useNavigate();


  // State variables for sliders
  const [sliderValue1, setSliderValue1] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(30);
  const [sliderValue3, setSliderValue3] = useState(60);

  // Event handlers for sliders
  const handleSliderChange1 = (event) => {
    setSliderValue1(event.target.value);
  };

  const handleSliderChange2 = (event) => {
    setSliderValue2(event.target.value);
  };

  const handleSliderChange3 = (event) => {
    setSliderValue3(event.target.value);
  };

  const [isModeOn1, setIsModeOn1] = useState(false);
       const toggleMode1 = () => {
       setIsModeOn1(!isModeOn1);
    }


    const [isModeOn2, setIsModeOn2] = useState(false);
    const toggleMode2 = () => {
    setIsModeOn2(!isModeOn2);
 }





  return (
    <div  style={{width:400}}>
      <div onClick={() => navigate(-1)}>
        <p ><FaArrowLeft /></p>
      </div>

      <p className='heading' style={{marginLeft:20}}>Sound & vibration</p>

      <div style={{ display: 'flex',marginLeft:0 }}>
        <div className='Ring' style={{ width: 150, height: 170, borderRadius: 30 }}>
          <FaBell style={{ marginTop: 30 }} className='bell' />
          <p className='Darktext1' style={{marginBottom:0,marginTop:25}}>Notifications</p>
          <p className='Lighttext' style={{marginTop:0}}>Droplets</p>
        </div>

        <div >
          <div  className="Ring" style={{ width: 180, height: 80, borderRadius: 30 ,display:'flex',alignItems:'center',marginLeft:0}}>
            <FaPhoneAlt className='phone' />

            <div>
            <p className='Darktext1' style={{marginBottom:0}}>Ringtone</p>
            <p className='Lighttext' style={{marginTop:0}}>POCO</p>
            </div>
          </div>

          <div  className='Ring' style={{   width: 180, height: 80, borderRadius: 30 ,display:'flex',alignItems:'center',marginTop:10,marginLeft:0}}>
            <FaClock  className='alarm'/>
            <div>
               <p className='Darktext1'style={{marginBottom:0}} >Alarm</p>
            <p className='Lighttext' style={{marginTop:0}}>Daydream</p>
            </div>
           
          </div>
        </div>
      </div>

      <div>
        <p className='Lighttext'>Adjust volume</p>
        <br />

        <div style={{marginLeft:0}}>
          <div className='Media'  >
          <FaMusic className='Music' /><p  className='Darktext1'> Media</p>
          </div>
          <div className="Sound-slider" style={{marginTop:0,marginLeft:0}}>
            <input style={{marginTop:0,width:250}} type="range" min="0" max="100" value={sliderValue1} onChange={handleSliderChange1} className="sound"  />
          </div>
        </div>

        <div  style={{marginLeft:0}}>
            <div className='Media'><FaBell className='Music' /> <p className='Darktext1'>Ringtone</p> </div> 
          <div className="Ringtone"  style={{marginTop:0,marginLeft:0}}>
            <input type="range" min="0" max="100" value={sliderValue2} onChange={handleSliderChange2} className="Ringtone"  style={{width:250}} />
          </div>
        </div>

        <div  style={{marginLeft:0}}> 
         <div className='Media' style={{marginTop:22,marginLeft:0}}> <FaClock className='Music' /> <p className='Darktext1'>Alarm</p></div>
          <div className="Alarm" style={{marginTop:0,marginLeft:0}}>
            <input type="range" min="0" max="100" value={sliderValue3} onChange={handleSliderChange3} className="Alarm" style={{width:250}} />
          </div>
        </div>
      </div>

      <div onClick={() => navigate("/Sound3")}   className='Sound-Assistant'>

        <div>
        <p className='Darktext1' style={{marginBottom:0,marginTop:30}}>Sound assistant</p>
        <p className='Lighttext' style={{marginTop:0}}>Customize your sound settings</p>
        </div>
        <p className="Lighttext">&gt;</p>
      </div>

      <hr  />

      <div>
        <p className='Lighttext'>SILENT MODE</p><br />

        <div className='Modes' >
          
          <div >
          <p className='Darktext1' style={{marginBottom:0 ,marginLeft:0}}>Silent mode</p>
          <p   className='Lighttext' style={{marginTop:0,marginLeft:0}}>Silence incoming calls and notifications</p>
          </div>
          
          <label className="switch">
              <input type="checkbox" onChange={toggleMode1} checked={isModeOn1} style={{width:102}} />
              <span className="slider round"></span>
              </label>
       
          
        </div>

        <div className='Modes'>

          <div>
          <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Silence media in Silent mode</p>
          <p   className='Lighttext' style={{marginTop:0,marginLeft:0}}> Games, music, videos, and other apps</p>
          </div>
          
          <label className="switch">
              <input type="checkbox" onChange={toggleMode2} checked={isModeOn2} />
              <span className="slider round"></span>
              </label>

            </div>

        <div  className='Modes' onClick={() => navigate("/Sound1")}>
          <div>
          <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Do not disturb</p>
          <p className='Lighttext' style={{marginTop:0,marginLeft:0}}> There'll be no reminders for incoming calls and notifications</p>
          </div>
          <p className="Lighttext">&gt;</p>
        </div>

        <div className='Modes' onClick={() => navigate("/Sound2")} >
          <p className='Darktext1'>Additional settings</p>
          <p className='Lighttext'>&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default Sound;
