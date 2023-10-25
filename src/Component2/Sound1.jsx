import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Sound1() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';


    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setIsDandDdataOn({
          
         donotdisturb:response.data.sound.donotdisturbdata.donotdisturb,
          whenlock:response.data.sound.donotdisturbdata.whenlock,
          notifyabouotcall:response.data.sound.donotdisturbdata.notifyaboutcall,
       
      });
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);


    const initialState={
      donotdisturb:false,
      whenlock:false,
      notifyaboutcall:false,
     
  
    }


    

    const [isDandDbataOn, setIsDandDdataOn] = useState(initialState);

    function toggleDandDdata(e) {
      const { name, checked } = e.target;
      setIsDandDdataOn(prevState => ({ ...prevState, [name]: checked }));
    }

    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/donotdisturbtogle`, isDandDbataOn);
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling airplane mode', error.message);
        }
      };
      post();
    }, [isDandDbataOn]);



  




  return (
 <div  style={{width:350}}>
   

        <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>



      
       <p style={{marginLeft:30}} className='heading'>Do not disturb</p>
       

     <div style={{marginLeft:30}}>
         <div style={{marginLeft:0}} className='Media'>
               
                <div style={{marginLeft:0}}>
              <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Do not disturb</p>
              <p  className='Lighttext' style={{marginLeft:0,marginTop:0}}>There'll be no reminders for incoming calls and notification</p>
              </div>
              
              <label className="switch">
              <input type="checkbox"  onChange={(e)=>toggleDandDdata(e)} name='donotdisturb' value={isDandDbataOn.donotdisturb} checked={isDandDbataOn.donotdisturb}  style={{width:180}} />
              <span className="slider round"></span>
              </label>

         </div>

          <div style={{marginLeft:0,justifyContent:'space-between'}} className='Media'>
              <p className='Darktext1' style={{marginLeft:0}}>When device is locked</p>
              {/* toggle button add krna hai */}

              <label className="switch">
              <input type="checkbox" onChange={(e)=>toggleDandDdata(e)} name='whenlock' value={isDandDbataOn.whenlock} checked={isDandDbataOn.whenlock} />
              <span className="slider round"></span>
              </label>
          </div>

         <div   className='Media'>

              <div style={{marginLeft:0}}>
             <p  className='Darktext1'  style={{marginLeft:0,marginBottom:0}}>Notify about repeated calls </p>
               <p className='Lighttext'  style={{marginLeft:0,marginTop:0}}>Ring or vibration while receiving the second call from the same contact within 15 minutes</p>
               </div>

               <label className="switch">
              <input type="checkbox"  onChange={(e)=>toggleDandDdata(e)} name='notifyaboutcall' value={isDandDbataOn.notifyaboutcall} checked={isDandDbataOn.notifyaboutcall}  style={{width:200}}/>
              <span className="slider round"></span>
              </label>
               {/* toggle button add krna hai */}
         </div>
     </div>
      
      <hr/>

       <div  className='Modes'style={{marginLeft:30}} >
           <p className='Darktext1' style={{marginLeft:0}}>Schedule turn on time</p>
           <p className='Lighttext'>&gt; off</p>
       </div>




    </div>
  )
}

export default Sound1