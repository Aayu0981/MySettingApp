import React from 'react'
import { useState} from 'react';



function Notification3() {

    const [isAirplaneModeOn, setIsAirplaneModeOn] = useState(false);
    const toggleAirplaneMode = () => {
    setIsAirplaneModeOn(!isAirplaneModeOn);
 }

  return (
    <div style={{width:400}}>
    
    <p className='heading'>Items shown on the Lock Screen afer Swiping down</p>

    <div className='Media' style={{justifyContent:'space-between'}}>
        <p className='Darktext1'>Notification</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media' >
      <div >
        <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Control centre</p>
        <p className='Lighttext' style={{marginLeft:0,marginTop:0}}>Works with the new version og control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn}  style={{width:200}}  />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media'>

      <div >
        <p  className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Smart home</p>
        <p className='Lighttext'style={{marginLeft:0,marginTop:0}}>works with the new version of Control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox" onChange={toggleAirplaneMode} checked={isAirplaneModeOn} style={{width:200}}/>
              <span className="slider round"></span>
              </label>
    </div>






    </div>
  )
}

export default Notification3