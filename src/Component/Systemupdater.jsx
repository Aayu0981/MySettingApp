import React from 'react'
import { FaAndroid, FaArrowAltCircleUp, FaArrowUp, FaArrowLeft,FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import img1 from '../image/Calculator.png'
import img2 from '../image/Theme.png'





function Systemupdater() {

  const navigate=useNavigate();


  return (
    <div style={{width:350  }} >

          
        <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>
        

    <p   style={{fontSize:30,marginBottom:30,marginLeft:20,fontWeight:300}}>System apps updater</p>

    <p className='Lighttext' style={{marginLeft:20, marginBottom:30}}>System apps</p>

    <div style={{display:'flex', justifyContent:'space-between',marginLeft:20}}>

    <div style={{display:'flex' ,marginLeft:0}}><img src={img1} style={{width:40, marginLeft:0}} /> 
    <p>Calculator</p>
    </div>
      


      <button style={{ border:'solid 1px ' ,width:80,height:30, color:'green',backgroundColor:'white'}}>Update</button>
    </div>



    
    <div style={{display:'flex',marginLeft:0 , justifyContent:'space-between' , marginTop:10}}>

      <div style={{display:'flex', marginLeft:0, marginBottom:30 }}><img src={img2} style={{width:85, marginLeft:0,backgroundColor:'white'}} />
      <p className='Darktext1' >Themes</p>
      </div>
      
      <button style={{  border:'solid 1px green',width:80,height:30 , color:'green',backgroundColor:'white'}}>Update</button>
    </div>
    
    <p style={{marginLeft:150,color:'green'}}>All updates</p>
    
    <hr style={{marginTop:50,opacity:0.5}}/>
    
    <div style={{marginTop:200}}  onClick={()=>navigate("/Systemupdater1")}>
      <button  className="button"style={{}}>Updates all</button>
    </div>

  </div>
  );
}

export default Systemupdater;