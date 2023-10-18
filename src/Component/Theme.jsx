import React from 'react'
import { FaPalette } from 'react-icons/fa'

function Theme() {
  return  (
    <div id='main3'>

         <FaPalette  className='theme'/>  
         <div className='arrow1'>
          <div id="text">Theme</div>
           <span className='arow' >&gt;</span>
          </div>
          
         {/* <span className='arow'>&gt;</span> */}

    </div>
  )
}

export default Theme