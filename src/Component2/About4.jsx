import React from 'react'
import { FaBold, FaArrowLeft, FaRProject, FaRadiation, FaRedo, FaRegClipboard, FaRegClock, FaRegClone, FaRegDotCircle, FaTruckLoading, FaUpload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



function About4() {

 const navigate=useNavigate();

  return (
    <div  style={{width:350}}>

       
        <div style={{marginLeft:0}} onClick={()=> navigate(-1)}>
            <p ><FaArrowLeft /></p>
        </div>

       <p style={{marginLeft:30}} className='heading'>Factory reset</p>
      

       <p style={{ marginLeft:30,fontSize:13,color:'grey'}}>ERASE THEFOLLOWING ITEMS</p>

       <div style={{marginLeft:30}} >
        <p className='Darktext1' style={{marginLeft:0}} >Accounts</p>

        <p  className='Darktext1' style={{marginLeft:0}} >Contacts</p>

        <p  className='Darktext1' style={{marginLeft:0}} >Photos and videos</p>

        <p  className='Darktext1' style={{marginLeft:0}} >Apps</p>

        <p  className='Darktext1' style={{marginLeft:0}} >Backups</p>

        <p  className='Darktext1' style={{marginLeft:0}} >Emulated SD card data</p>

        <p className='Darktext1' style={{marginLeft:0}} >other items on this device</p>
       </div>


       <div style={{marginLeft:30}} >
        <br/>


        <p style={{fontSize:13,color:'grey',marginLeft:0}}>All the items listed above will be erased permanently 
        Back up all important items to your computer or Xiaomi
        </p>

        <p style={{fontSize:13,color:'grey' , marginLeft:0}}>Note:Before restoring items, check whether the folder "MIUI-Backup-AllBackup" exists on your mobile device. If it doesn't, create it.</p>
        
       </div>
      

      <div style={{textAlign:'center',color:'grey',fontSize:15,marginTop:80}}>
      <FaRedo  style={{color:'black'}}/>
      <p>Erase all data</p>
      </div>
       








    </div>
  )
}

export default About4