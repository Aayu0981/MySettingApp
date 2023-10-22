import React, { useState } from 'react'
import { FaCheck, FaCropAlt, FaCross, FaCut, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';

function Hotspot2() {

    const navigate=useNavigate();

    const [form,setForm ]=useState({})

    const handleForm = (e) =>{
        console.log(e.target.value,e.target.name)
        setForm({
            ...form,
            [e.target.name] : e.target.value

        })
    }


    const handleFaCheck = async (e) =>{
        e.preventDefault();

        const response = await fetch('http://localhost:8080/demo' , {
            method :'GET'
        } )
        console.log(response);

    }

  return (
    <div style={{width:350}}>

        <form  onSubmit={handleFaCheck} style={{marginLeft:0}} >
            {/* <p>{JSON.stringify(form)}</p> */}

            <div className='Modes' style={{marginLeft:0}}>
                <div onClick={()=> navigate(-1)} style={{marginLeft:0}}>
            <p style={{marginLeft:0}}><FaTimes/></p>
            </div>


        
           <div >
            <p><FaCheck/></p>
            </div>
                </div>
       
        


        </form>

        <p className='heading'>Set up portable hotspot</p>


        <div className='Modes' id='Hotspot'>
            <p className='Darktext1'>Network name</p>
            <p className='Darktext1' style={{marginRight:20}}>poco M4 pro</p>
        </div>


        <div className='Modes' id='Hotspot'>
            <p className='Darktext1'>Password</p>

           <input type="Text" name="Password"  placeholder='Password' onChange={handleForm } style={{border:'none',marginRight:20}}/> 
          
        </div>



        




    </div>
  )
}

export default Hotspot2