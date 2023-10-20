import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';



function Status() {
const navigate=useNavigate();

  return (
    <div style={{width:350}}>
         <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>


        <p className='heading'>Status</p>


        <div className='Modes'>
            <p className='Darktext' style={{marginLeft:0}}>Battery status</p>
            <p className='Lighttext'>Not charging</p>
        </div>
        

        <hr/>
        
        <p className='Lighttext' style={{marginLeft:0}}>BASIC INFO</p>

        <div style={{marginLeft:0}}>
            <p className='Darktext1 ' style={{marginBottom:0,marginLeft:0}}>Phone number (sim slot 1)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Unknown</p>
        </div>
        

        <div style={{marginLeft:0}}>
            <p className='Darktext1 ' style={{marginBottom:0,marginLeft:0}}>Phone number (sim slot 2)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>8643003758</p>
        </div>

        <br/>

        <hr/>

        
        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>SIM status (sim slot 1)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Not available</p>
        </div>

        
        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>SIM status (sim slot 2)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>JIO 4G-jio</p>
        </div>

        
        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Model </p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>POCO</p>
        </div>

        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>IMEI (sim slot 1)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>869674056814330</p>
        </div>


        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>IMEI (sim slot 2)</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>869674056814348</p>
        </div>

            
            <hr/>

            <p className='Lighttext' style={{marginLeft:0}}>DEVICE IDENTIFIERS</p>

          
            <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>IP address</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0,marginBottom:0}}>26.10.146.70</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>2409:4043:2e9b:9156::d508:f602</p>
        </div>


        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Device wi-Fi MAC <address></address></p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Not available</p>
        </div>

        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Bluetooth</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}>Not available</p>
        </div>

        <div style={{marginLeft:0}}>
            <p className='Darktext1' style={{marginBottom:0,marginLeft:0}}>Uptime</p>
            <p className='Lighttext' style={{marginTop:0,marginLeft:0}}></p>
        </div>




    </div>
  )
}

export default Status