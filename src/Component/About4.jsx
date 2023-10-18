import React from 'react'
import { FaBold, FaArrowLeft, FaRProject, FaRadiation, FaRedo, FaRegClipboard, FaRegClock, FaRegClone, FaRegDotCircle, FaTruckLoading, FaUpload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';



function About4() {

 const navigate=useNavigate();

  return (
    <div  style={{width:350}}>

       
        <div onClick={()=> navigate(-1)}>
            <p ><FaArrowLeft /></p>
        </div>

       <div style={{fontSize:20,fontWeight:'500',marginTop:40,marginBottom:30}}><span>Factory reset</span></div>
      

       <p style={{fontSize:13,color:'grey',marginLeft:25}}>ERASE THEFOLLOWING ITEMS</p>

       <div >
        <h4>Accounts</h4>

        <h4>Contacts</h4>

        <h4>Photos and videos</h4>

        <h4>Apps</h4>

        <h4>Backups</h4>

        <h4>Emulated SD card data</h4>

        <h4>other items on this device</h4>
       </div>


       <div>
        <br/>


        <p style={{fontSize:13,color:'grey'}}>All the items listed above will be erased permanently 
        Back up all important items to your computer or Xiaomi
        </p>

        <p style={{fontSize:13,color:'grey'}}>Note:Before restoring items, check whether the folder "MIUI-Backup-AllBackup" exists on your mobile device. If it doesn't, create it.</p>
        
       </div>
      

      <div style={{textAlign:'center',color:'grey',fontSize:15,marginTop:80}}>
      <FaRedo  style={{color:'black'}}/>
      <p>Erase all data</p>
      </div>
       








    </div>
  )
}

export default About4