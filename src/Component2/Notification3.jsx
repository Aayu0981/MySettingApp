import React from 'react'
import { useState} from 'react';



function Notification3() {

    const [isIteamOn1, setIsIteamOn1] = useState(false);
    const toggleIteam1 = () => {
    setIsIteamOn1(!isIteamOn1);
 }


 const [isIteamOn2, setIsIteamOn2] = useState(false);
 const toggleIteam2 = () => {
 setIsIteamOn2(!isIteamOn2);
}


const [isIteamOn3, setIsIteamOn3] = useState(false);
const toggleIteam3 = () => {
setIsIteamOn3(!isIteamOn3);
}


  return (
    <div style={{width:400}}>
    
    <p className='heading'>Items shown on the Lock Screen afer Swiping down</p>

    <div className='Media' style={{justifyContent:'space-between'}}>
        <p className='Darktext1'>Notification</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleIteam1} checked={isIteamOn1} />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media' >
      <div >
        <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Control centre</p>
        <p className='Lighttext' style={{marginLeft:0,marginTop:0}}>Works with the new version og control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleIteam2} checked={isIteamOn2}  style={{width:200}}  />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media'>

      <div >
        <p  className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Smart home</p>
        <p className='Lighttext'style={{marginLeft:0,marginTop:0}}>works with the new version of Control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleIteam3} checked={isIteamOn3} style={{width:200}}/>
              <span className="slider round"></span>
              </label>
    </div>






    </div>
  )
}

export default Notification3