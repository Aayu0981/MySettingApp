import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { faL } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect } from 'react';



function Sound2() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setIsAddsettingOn({
       daialpadtone :response.data.sound.additionalsetting.daialpadtone ,
       tapsound : response.data.sound.additionalsetting.tapsound, 
       playsoundonlock: response.data.sound.additionalsetting.playsoundonlock, 
       playsoundonss : response.data.sound.additionalsetting.playsoundonss, 
       playsoundonunistall : response.data.sound.additionalsetting.playsoundonunistall, 
       playsoundondlelete : response.data.sound.additionalsetting.playsoundondlelete, 
       playsoundoncharger : response.data.sound.additionalsetting.playsoundoncharger,
       playsoundonstart : response.data.sound.additionalsetting.playsoundonstart
        });
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    const initialState={
       daialpadtone :false ,
       tapsound : false, 
       playsoundonlock: false, 
       playsoundonss : false, 
       playsoundonunistall : false, 
       playsoundondlelete : false, 
       playsoundoncharger : false,
       playsoundonstart : false
    }

   //  toggle button code 1
    const [isAddsettingOn, setIsAddsettingOn] = useState(initialState);
    function toggleAddsetting(e) {
      const { name, checked } = e.target;
      setIsAddsettingOn(prevState => ({ ...prevState, [name]: checked }));
    }


    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/additionalsetting`, isAddsettingOn);
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling Addsetting mode', error.message);
        }
      };
      post();
    }, [isAddsettingOn]);
  

  return (

   
    <div style={{width:350}}>


        
        <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>

     <p  style={{marginLeft:30}}className='heading'>Additional settings</p>

     <div className='Modes' style={{marginLeft:30}}>
        <p className='Darktext1'>Dial pad tones</p>

         {/* toggle button code 2 */}
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)} name='daialpadtone'  value={isAddsettingOn.daialpadtone} checked={isAddsettingOn.daialpadtone} />
              <span className="slider round"></span>
              </label>
       
     </div>

     <div className='Modes' style={{marginLeft:30}} >
        <p className='Darktext1'>Tap sounds</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)}  name='tapsound'  value={isAddsettingOn.tapsound} checked={isAddsettingOn.tapsound} />
              <span className="slider round"></span>
              </label>
     </div>

     <div   className='Modes' style={{marginLeft:30}}>
        <p className='Darktext1'>Play sound when locking device</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)}  name='playsoundonlock'  value={isAddsettingOn.playsoundonlock}  checked={isAddsettingOn.playsoundonlock} />
              <span className="slider round"></span>
              </label>
     </div>
       

       <div  className='Modes' style={{marginLeft:30}} >
        <p className='Darktext1'>play sound when taking screenshot</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)}  name='playsoundonss' value={isAddsettingOn.playsoundonss}  checked={isAddsettingOn.playsoundonss} />
              <span className="slider round"></span>
              </label>
       </div>


       
       <div className='Modes' style={{marginLeft:30}}>
        <p className='Darktext1'>play sound when uninstalling apps</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)}  name='playsoundonunistall'  value={isAddsettingOn.playsoundonunistall} checked={isAddsettingOn.playsoundonunistall} />
              <span className="slider round"></span>
              </label>
       </div>


       <div className='Modes' style={{marginLeft:30}} >
        <p className='Darktext1'>play sound when deleting items</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)} name='playsoundondlelete' value={isAddsettingOn.playsoundondlelete} checked={isAddsettingOn.playsoundondlelete} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' style={{marginLeft:30}} >
        <p className='Darktext1'>play sound when charger is connected</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)} name='playsoundoncharger'  value={isAddsettingOn.playsoundoncharger} checked={isAddsettingOn.playsoundoncharger} style={{width:120}} />
              <span className="slider round"></span>
              </label>
       </div>


       <div  className='Modes' style={{marginLeft:30}} >
        <p className='Darktext1'>play audio at startup</p>
        <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleAddsetting(e)} name='playsoundonstart'  value={isAddsettingOn.playsoundonstart}  checked={isAddsettingOn.playsoundonstart} />
              <span className="slider round"></span>
              </label>
       </div>











    </div>

  )
}

export default Sound2
