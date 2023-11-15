import React from 'react'
import { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';



function Sound3() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';

    // toggle button code 1

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setIsSoundOn({
          adjustmedia:response.data.sound.soundassistant.adjustmedia,
          audio:response.data.sound.soundassistant.audio
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const initialState={
    adjustmedia:false,
    audio:false

  }




    const [isSoundOn, setIsSoundOn] = useState(initialState);
   

    function toggleSound(e) {
      const { name, checked } = e.target;
      setIsSoundOn(prevState => ({ ...prevState, [name]: checked }));
    }
  

    
  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/soundassistanttogle`, isSoundOn);
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling Sound assistante mode', error.message);
      }
    };
    post();
  }, [isSoundOn]);


    


    

  return (
  <div style={{width:350}}>

        <div style={{marginLeft:-22}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>


 
     <p style={{marginLeft:10}} className='heading'>Sound assistant</p>

      <div style={{display:'flex',marginLeft:0,alignItems:'center'}}>

        <div  style={{marginLeft:0}} >
          <p className='Darktext1' style={{marginBottom:5}}>Adjust media sound in multiple apps</p>
         <p className='Lighttext' style={{marginTop:0}}>adjust sound for individual apps while multiple apps play audio simultaneously</p>
         </div>


         <div>

          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleSound(e)}  name='adjustmedia'  checked={isSoundOn.adjustmedia} />
              <span className="slider round"></span>
              </label>
              </div>

        </div>
   
         
        <div style={{display:'flex',marginLeft:0,alignItems:'center'}}>

          <div style={{marginLeft:0}}>
          <p className='Darktext1' style={{marginBottom:5}}>Multiple audio sources</p>
          < p className='Lighttext' style={{marginTop:0}}> Don't adjust media volume during incoming notifications or while audio from other source is played</p>

          </div>
            

            <div >
          {/* toggle button code 2 */}
           <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleSound(e)}  name='audio' checked={isSoundOn.audio} />
              <span className="slider round"></span>
              </label>
              </div>


        </div>

   




    </div>
  )
}

export default Sound3