import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



function Sound2() {

    const navigate=useNavigate();

    // toggle button code 1
    const [isAddOn1, setIsAddOn1] = useState(false);
       const toggleAdd1 = () => {
       setIsAddOn1(!isAddOn1);
    }

    const [isAddOn2, setIsAddOn2] = useState(false);
    const toggleAdd2 = () => {
    setIsAddOn2(!isAddOn2);
 }


     const [isAddOn3, setIsAddOn3] = useState(false);
    const toggleAdd3 = () => {
     setIsAddOn3(!isAddOn3);
    }


    const [isAddOn4, setIsAddOn4] = useState(false);
    const toggleAdd4 = () => {
    setIsAddOn4(!isAddOn4);
 }
     
     
 const [isAddOn5, setIsAddOn5] = useState(false);
 const toggleAdd5 = () => {
 setIsAddOn5(!isAddOn5);
}   


   

const [isAddOn6, setIsAddOn6] = useState(false);
const toggleAdd6 = () => {
setIsAddOn6(!isAddOn6);
}



const [isAddOn7, setIsAddOn7] = useState(false);
const toggleAdd7 = () => {
setIsAddOn7(!isAddOn7);
}



const [isAddOn8, setIsAddOn8] = useState(false);
const toggleAdd8 = () => {
setIsAddOn8(!isAddOn8);
}




  return (

   
    <div style={{width:400}}>


        
        <div onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

     <p className='heading'>Additional settings</p>

     <div className='Modes'>
        <p className='Darktext1'>Dial pad tones</p>

         {/* toggle button code 2 */}
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd1} checked={isAddOn1} />
              <span className="slider round"></span>
              </label>
       
     </div>

     <div className='Modes' >
        <p className='Darktext1'>Tap sounds</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd2} checked={isAddOn2} />
              <span className="slider round"></span>
              </label>
     </div>

     <div   className='Modes'>
        <p className='Darktext1'>Play sound when locking device</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd3} checked={isAddOn3} />
              <span className="slider round"></span>
              </label>
     </div>
       

       <div  className='Modes' >
        <p className='Darktext1'>play sound when taking screenshot</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd4} checked={isAddOn4} />
              <span className="slider round"></span>
              </label>
       </div>


       
       <div className='Modes' >
        <p className='Darktext1'>play sound when uninstalling apps</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd5} checked={isAddOn5} />
              <span className="slider round"></span>
              </label>
       </div>


       <div className='Modes' >
        <p className='Darktext1'>play sound when deleting items</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd6} checked={isAddOn6} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' >
        <p className='Darktext1'>play sound when charger is connected</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd7} checked={isAddOn7} style={{width:120}} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' >
        <p className='Darktext1'>play audio at startup</p>
        <label className="switch">
              <input type="checkbox" onChange={toggleAdd8} checked={isAddOn8} />
              <span className="slider round"></span>
              </label>
       </div>











    </div>

  )
}

export default Sound2