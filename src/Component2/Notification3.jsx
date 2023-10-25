import React from 'react'
import { useState , useEffect} from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Notification3() {


  const BASE_URL = 'http://localhost:4000';


  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsIteamOn({
        
      notify:response.data.notifications.itemsshows.notify,
      controlc:response.data.notifications.itemsshows.controlc,
      smarthome1:response.data.notifications.itemsshows.smarthome1,
    });
  } catch (error) {
    console.error('Error:', error.message);
   }
   };

    useEffect(() => {
    fetchData();
    }, []);

    const initialState={
      notify:false,
      controlc:false,
      smarthome1:false,
     
  
    }





    const [isIteamOn, setIsIteamOn] = useState(initialState);
   
    function toggleIteam(e) {
      const { name, checked } = e.target;
      setIsIteamOn(prevState => ({ ...prevState, [name]: checked }));
    }

     
    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/itemsshowstogle`, isIteamOn);
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling airplane mode', error.message);
        }
      };
      post();
    }, [isIteamOn]);




 

const nevigate=useNavigate();


  return (
    <div style={{width:350}}>

      
<div style={{marginLeft:0}} onClick={()=> nevigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
    
    <p  style={{marginLeft:10}}className='heading'>Items shown on the Lock Screen afer Swiping down</p>

    <div className='Media' style={{justifyContent:'space-between'}}>
        <p className='Darktext1'>Notification</p>
        <label className="switch">
              <input type="checkbox"   onChange={(e)=>toggleIteam(e)} name='notify' value={isIteamOn.notify} checked={isIteamOn.notify} />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media' >
      <div >
        <p className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Control centre</p>
        <p className='Lighttext' style={{marginLeft:0,marginTop:0}}>Works with the new version og control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox"  onChange={(e)=>toggleIteam(e)} name='controlc' value={isIteamOn.controlc} checked={isIteamOn.controlc} style={{width:200}}  />
              <span className="slider round"></span>
              </label>
    </div>


    <div className='Media'>

      <div >
        <p  className='Darktext1' style={{marginLeft:0,marginBottom:0}}>Smart home</p>
        <p className='Lighttext'style={{marginLeft:0,marginTop:0}}>works with the new version of Control centre</p>
        </div>
        <label className="switch">
              <input type="checkbox"  onChange={(e)=>toggleIteam(e)} name='smarthome1' value={isIteamOn.smarthome1} checked={isIteamOn.smarthome1} style={{width:200}}/>
              <span className="slider round"></span>
              </label>
    </div>






    </div>
  )
}

export default Notification3