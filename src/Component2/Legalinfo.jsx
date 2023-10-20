import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function Legalinfo() {

    const navigate=useNavigate();

  return (
    <div style={{width:350}}>

<div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

        
        <p className='heading'>Legal information</p>

        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>Open source licenses</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>Google legal</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>Google Play system update licences</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>Term of Service</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>Privacy Policy</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>RF Exposure Information</p>

            <p className='Darktext1' style={{marginLeft:0 , marginBottom:30}}>User Experience Programme</p>

            <p className='Darktext1' style={{marginLeft:0, marginBottom:30}}>PCO Launcher User Agreement</p>

            <p className='Darktext1' style={{marginLeft:0}}>POCO Launcher Privacy Policy</p>
           
        </div>
    </div>
  )
}

export default Legalinfo;