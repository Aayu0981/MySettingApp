import React from 'react'
import { FaHome } from 'react-icons/fa'

function HomeScreen() {
  return (
    <div id='main3'>
        <FaHome className='Home'/>  

        <div className='arrow1'>
          <div id="text">Home Screen</div>
           <span className='arow' >&gt;</span>
          </div>
        {/* <span className='arow' style={{marginLeft:165}}>&gt;</span> */}

        </div>
  )
}

export default HomeScreen;