import React from 'react'
import { FaImage } from 'react-icons/fa';

function Wallpaper() {
  return (
    <div id='main3'>
        <FaImage className='wallpaper'/>  

        <div className='arrow1'>
          <div id="text"> Wallpaper</div>
         <span className='arow' >&gt;</span>
        </div>
        
        {/* <span className='arow' style={{marginLeft:190}}>&gt;</span> */}
        </div>
  )
}

export default Wallpaper;