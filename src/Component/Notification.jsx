import React from 'react'
import { FaBell } from 'react-icons/fa';

function Notification() {
  return (
    <div id='main3'>
        <FaBell className='notify'/>   
        

        <div className='arrow1'>
          <div id="text">Notification & Control Center</div>
           <span className='arow' >&gt;</span>
          </div>
        {/* <span className='arow' style={{marginLeft:50}}>&gt;</span> */}
        </div>
  )
}

export default Notification;