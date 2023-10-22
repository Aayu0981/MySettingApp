import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function About6() {

  const nevigate =useNavigate();

  return (
    <div style={{width:350}}>

       
<div style={{marginLeft:30}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

   <div>
    <p style={{marginLeft:30}} className='heading'>Important safety information</p>
   </div>

   <div style={{marginLeft:0}}>
   <ul class="ul1">
    <li>Read all the safety information below before using your device.</li><br/>
    <li>Using unauthorised cables, power adapters, or batteries can cause ﬁre or explosion, or pose other risks.</li><br/>
    <li>Use only authorised accessories which are compatible with your device.</li><br/>
    <li>Use this device within the temperature range of 0°C to 40°C, and store this device and its accessories within the temperature range of -20°C to 45°C. Using this device in environments outside of this temperature range may damage the device.</li><br/>
    <li>If your device is provided with a built-in battery, don't attempt to replace the battery yourself. This may damage the battery or the device. The battery may only be replaced at an authorised service center.</li><br/>
    <li>Charge this device only with the included or authorised cable and power adapter. Using other adapters may cause ﬁre, electric shock, and damage the device and the adapter.</li><br/>
    <li>After charging is complete, disconnect the adapter from both the device and the power outlet. Do not charge the device for longer than 12 hours.</li><br/>
    <li>Do not attempt to modify the plug or power cord on your own, and disconnect the power supply before cleaning the charger.</li><br/>
    <li>Do not throw away the device or old batteries into the regular trash. If not handled properly, batteries may explode or catch fire. Follow your local regulations when disposing of the device, batteries, and other accessories.</li><br/>
    <li>Do not disassemble, hit, crush, or burn the battery. In case of swelling or other deformation, stop using the battery immediately.</li><br/>
    </ul>
   </div>





    </div>
  )
}

export default About6;