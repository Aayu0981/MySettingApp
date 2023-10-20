import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaAndroid, FaArrowAltCircleUp, FaArrowUp, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaAirbnb, FaFontAwesome, FaFontAwesomeLogoFull, FaPlane } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaSoundcloud, FaVolumeUp } from 'react-icons/fa';
import { FaPhone, FaSearch } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaAlignRight, FaArrowRight, FaArrowsAlt, FaArrowsAltH, FaArrowsAltV, FaBluetooth, FaExpandArrowsAlt, FaGreaterThan, FaLongArrowAltRight, FaRegArrowAltCircleRight } from 'react-icons/fa';
import Aboutphone1 from './Component/Aboutphone1';
import './App.css'


function Home() {
    const navigate = useNavigate();

    
        
  return (



<div>

    
    <div>
 <h1>Settings</h1>

 <div id='box1' >
  <label className="input-label">
    <span className="search-icon" >&#128269;</span>

    <input id='searchbox' type="text" placeholder="Search settings" />
  </label>
  </div>
    </div>



    <div className="about-phone">
         <FaPhone className="Phoneicone"/>
         <div className="arrow1"  onClick={()=>navigate("/Aboutphone1")}>
             <div id="text">About Phone</div>
             <span className="arow">&gt;</span>
            
         </div> 
    </div>


     <div className='System-apps-udates'>
     <div id='main3' className='sytem11' >
    <FaArrowUp id='system'/>   
     
     <div className='arrow1' onClick={()=>navigate("/Systemupdater")}>
      <div id="text">System apps updater</div>
    <span className='arow'>&gt;</span>
    </div>

  </div>
     </div>

     <div id='Security-status'>

     <div id='blue' className='security111'>
            <div id="main2"><FaLock className='security' /> 

            <div className="xyz">
                <div  className='arrow1'   onClick={()=>navigate("/Security")}>
                    <div id="text">Security status</div>
           <span className='arow' >&gt;</span>
          </div></div></div>
            
            
           
            {/* <span className='arow' style={{marginLeft:150}}>&gt;</span> */}


            <hr id='One' />
        </div>
     </div>


     <div id="Air-plane">
     <div id='air'>
      

      <FaPlane className='airplane'/>  
      
  
        <div className='arrow1' onClick={()=>navigate("/Airoplane")} >  
        <div id="text">Airplane Mode</div>
         <span className='arow' >&gt;</span>
        </div>
      </div>
     </div>


     <div id="Display-And-Bright">

     <div className='Dandb'>
        <FaSun className='danb11'/>  

        <div className='arrow1' onClick={()=>navigate("/DandB")}>
          <div id='text'> Display and Brightness</div>
           <span className='arow' >&gt;</span>
          </div>
        
        {/* <span className='arow' style={{marginLeft:95}}>&gt;</span> */}
        </div>
     </div>

     <div id="Sound-vibration">
     <div id='main3'>
        <FaVolumeUp className='sound'/>  

        <div className='arrow1'  onClick={()=>navigate("/Sound")}>
          <div id="text">Sound and Vibration</div>
           <span className='arow' >&gt;</span>
          </div>
        {/* <span className='arow' style={{marginLeft:110}}>&gt;</span> */}
        
        </div>
     </div>


     <div id='wifi1'>
          <FaWifi className='wifi'/>

          <div className='arrow1'  onClick={()=>navigate("/Connection")}>
            <div id="text">Wi-Fi</div>
           <span className='arow' >&gt;</span>
          </div>
          
          {/* <span className='arow' style={{marginLeft:218}}>&gt;</span> */}
          </div>


          <div id="Blue-Tooth">
          <div id='blue'>
        <>
        <div id="main2"><FaBluetooth className='bluetooth'/>   
     {/* <span className='bluethootarow' style={{marginLeft:185}}>&gt;</span>
     {/* <FaGreaterThan className='bluethootarow'/> */}
      

      <div className='xyz'>
        <div className="arrow1" onClick={()=> navigate("/Bluetooth")}>
          <div id="text">Bluetooth</div>
           <span className='arow' >&gt;</span>
          </div></div>
        </div>
     

     </>
       <></>
         <hr id='Second2'/>
     </div>
    
          </div>



          <div id="Noti-Fication">
          <div id='main3'>
        <FaBell className='notify'/>   
        

        <div className='arrow1' onClick={()=> navigate("/Notification")} >
          <div id="text">Notification & Control Center</div>
           <span className='arow' >&gt;</span>
          </div>
        {/* <span className='arow' style={{marginLeft:50}}>&gt;</span> */}
        </div>
          </div>


          <div id="Home-Screen">
          <div id='main3'>
        <FaHome className='Home'/>  

        <div className='arrow1'>
          <div id="text">Home Screen</div>
           <span className='arow' >&gt;</span>
          </div>
        {/* <span className='arow' style={{marginLeft:165}}>&gt;</span> */}

        </div>
          </div>
  
  <div id="Wall-Paper">
  <div id='main3'>
        <FaImage className='wallpaper'/>  

        <div className='arrow1' onClick={()=>navigate("/Wallpaper")}>
          <div id="text"> Wallpaper</div>
         <span className='arow' >&gt;</span>
        </div>
        
        {/* <span className='arow' style={{marginLeft:190}}>&gt;</span> */}
        </div>
        
  </div>

  <div id="The-me">
  <div id='main3'>

<FaPalette  className='theme'/>  
<div className='arrow1'>
 <div id="text">Theme</div>
  <span className='arow' >&gt;</span>
 </div>
 
{/* <span className='arow'>&gt;</span> */}

</div>
  </div>
    

</div>


  )
}

export default Home