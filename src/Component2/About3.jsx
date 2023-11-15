import React from 'react'
import { FaAssistiveListeningSystems, FaDesktop, FaMobile, FaMobileAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';


function About3() {

    const navigate=useNavigate();
    const BASE_URL = 'http://localhost:4000';
    const [isautorestoreOn, setIsautorestoreOn] = useState(false);


   
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getUserData`);
        setIsautorestoreOn(response.data.automaticrestore);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
    

   
    const toggleautorestore = () => {
    setIsautorestoreOn(!isautorestoreOn);
 }


    useEffect(() => {
      const post = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/autorestoretogle`, {
            tog: `${isautorestoreOn}`
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error toggling  Automatic restore', error.message);
        }
  
      }
      post();
    }, [isautorestoreOn]);


  return (
    <div  style={{width:350}}>

               
           <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
        


        <p style={{fontSize:30,marginBottom:5,marginLeft:20,fontWeight:300}}>Back up and restore</p>

        <div>

          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlhFBn7y5CnaEs1or-sN8v91G0XAwKEkaMTRZY8QKj8ZAX8k-z"  style={{marginLeft:60}} />
        </div>

        <hr  style={{opacity:0.5}}/>
         
         <p className='Lighttext'>LOCAL</p>


        <div id='MobileDevice'>
          <div style={{marginLeft:0}}>
          <p> <FaMobileAlt style={{color:'blue', fontSize:30, marginLeft:0}}/></p> 
            </div>
            <div>
           <p style={{marginTop:8,marginBottom: 0, marginLeft:5}} className='Darktext1'>Mobile device</p> 
           <p style={{marginTop:0, marginLeft:5}} className='Lighttext'>Back up and restore items on this device</p>
           </div>
        </div>

        <div id="MobileDevice" >
          <div style={{marginLeft:0}} >
           <p><FaDesktop style={{color:'blue', fontSize:30, marginLeft:0}}/></p>
            </div>
            

          <div>
            
          <p style={{marginTop:8,marginBottom: 0, marginLeft:5}} className='Darktext1'>Computere</p> 
           <p style={{marginTop:0, marginLeft:5}} className='Lighttext'>Back up and restore items using a computer</p>

            
            </div>
            
        </div>

        <hr style={{opacity:0.5}}/>
        <p className='Lighttext'>CLOUD</p>

        <div  id='Cloud'>
            
            <div style={{marginLeft:0}}> <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Xiaomi Cloud</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Sync the list of apps, back up sytem settings and home sceen layout</p></div>

            
            
        </div>

        <hr style={{opacity:0.5}}/>

        <p className='Lighttext'>GOOGLE BACKUPS</p>

        <div id='Cloud'  onClick={()=>navigate("/About5")}>
          <div style={{marginLeft:0}}> 
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Back up my data</p>
            <p className='Lighttext'  style={{marginTop:0,marginLeft:0}}>On</p>
          </div>
            
            <div><p className='Lighttext'>&gt;</p></div>
        </div>

        <div id='Cloud' style={{marginLeft:0 ,marginRight:0}}>

          <div style={{marginRight:0 }} >
          <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Automatic restore </p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}} >When reinstalling an app ,restore backed-up settings and data</p>
          </div>
          
            <div style={{marginTop:20, marginLeft:0}} >
              <label className="switch">
              <input type="checkbox" onChange={toggleautorestore} checked={isautorestoreOn} />
              <span className="slider round"></span>
              </label>
          </div>
             
            
        </div>





    </div>
  )
}

export default About3