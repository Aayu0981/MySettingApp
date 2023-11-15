import React from 'react'
import { useState,useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Bluetooth1() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';

// toggle button code 1


const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getUserData`);
    setIsPairOn({
   
      pair:response.data.connection.pair,
      showbluetooth:response.data.connection.showbluetooth
      
      });
    }catch (error) {
    console.error('Error:', error.message);
  }
};
useEffect(() => {
  fetchData();
}, []);

const initialState = {
  pair:false,
  showbluetooth:false
}


const [isPairOn, setIsPairOn] = useState(initialState);

function togglePair(e) {
  const { name, checked } = e.target;
  setIsPairOn(prevState => ({ ...prevState, [name]: checked }));
}


useEffect(() => {
  const post = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/connectiontogle`, isPairOn);
      console.log(response.data);
    } catch (error) {
      console.error('Error toggling connection mode', error.message);
    }
  };
  post();
}, [isPairOn]);





  return (
    <div style={{width:350}}>
           

        <div style={{marginLeft:-20}}onClick={()=> navigate(-1)}>
            <p><FaArrowLeft/></p>
        </div>
      

       <p className='heading' style={{marginLeft:10}}>Additional settings</p>

       <p  className='Lighttext'>CONNECTION</p>
     <div  style={{marginLeft:0}}>
         <div className='Media' >
            <div>
          <p className='Darktext1' style={{marginBottom:0 ,marginLeft:0}}> Pair compatible device</p>
          <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Quickly connect earnphone, speakers, and other compatible device</p>
          </div>

          {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={(e)=>{togglePair(e)}} name='pair' value={isPairOn.pair} checked={isPairOn.pair}  style={{width:100}}/>
              <span className="slider round"></span>
              </label>
              </div>

           <div  className='Modes'> 
           <p className='Darktext1'>Bluetooth blocklist</p>
            <p className='Lighttext'>&gt;</p>
         </div>
     </div>

           <hr/>

           <p className='Lighttext'>DISPLAYED ITEMS</p>

       <div className='Modes'>
           

            <p className='Darktext1'>Show Bluetooth device without names</p>
            {/* toggle button code 2 */}
          <label className="switch">
              <input type="checkbox" onChange={(e)=>{togglePair(e)}} name='showbluetooth' value={isPairOn.showbluetooth} checked={isPairOn.showbluetooth}  style={{width:100}}/>
              <span className="slider round"></span>
              </label> 

        </div>





    </div>
  )
}

export default Bluetooth1