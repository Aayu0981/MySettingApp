import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function Legalinfo() {

    const navigate=useNavigate();

  return (
    <div style={{width:350}}>

<div  onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

        
        <p style={{marginLeft:30}} className='heading'>Legal information</p>

        <div >
            <p className='Darktext1' style={{ marginBottom:30}}>Open source licenses</p>

            <p className='Darktext1' style={{ marginBottom:30}}>Google legal</p>

            <p className='Darktext1' style={{ marginBottom:30}}>Google Play system update licences</p>

            <p className='Darktext1' style={{ marginBottom:30}}>Term of Service</p>

            <p className='Darktext1' style={{ marginBottom:30}}>Privacy Policy</p>

            <p className='Darktext1' style={{ marginBottom:30}}>RF Exposure Information</p>

            <p className='Darktext1' style={{ marginBottom:30}}>User Experience Programme</p>

            <p className='Darktext1' style={{ marginBottom:30}}>PCO Launcher User Agreement</p>

            <p className='Darktext1' >POCO Launcher Privacy Policy</p>
           
        </div>
    </div>
  )
}

export default Legalinfo;