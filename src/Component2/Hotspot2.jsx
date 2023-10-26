import React, { useState, useEffect } from 'react'
import { FaCheck, FaCropAlt, FaCross, FaCut, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';


function Hotspot2() {

    const navigate = useNavigate();
    const BASE_URL = 'http://localhost:4000';

    const initialstate = {
        deviceName: "POCO M4 pro",
        password: ""
    }

    const [form, setForm] = useState(initialstate)

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = () => {
        if (form.password.length >= 8) {
            const post = async () => {
                try {
                    const response = await axios.post(`${BASE_URL}/hotspotPasswordchange`, form);
                    console.log(response.data);

                } catch (error) {
                    console.error('Error toggling airplane mode', error.message);

                }
                alert("Password changed Succsssfully");
            };
            post();


        }
        else {
            alert("Pasword must have atleast 8 Character");
        }

    }



    return (
        <div style={{ width: 350 }}>

            <form style={{ marginLeft: 0 }} >
                {/* <p>{JSON.stringify(form)}</p> */}

                <div className='Modes' style={{ marginLeft: 0 }}>
                    <div onClick={() => navigate(-1)} style={{ marginLeft: 0 }}>
                        <p style={{ marginLeft: 0 }}><FaTimes /></p>
                    </div>



                    <div  >
                        <p onClick={handleSubmit}><FaCheck /></p>
                    </div>
                </div>




            </form>

            <p className='heading'>Set up portable hotspot</p>


            <div className='Modes' id='Hotspot'>
                <p className='Darktext1'>Network name</p>
                <p className='Darktext1' style={{ marginRight: 20 }}>poco M4 pro</p>
            </div>


            <div className='Modes' id='Hotspot'>
                <p className='Darktext1'>Password</p>

                <input type='password' name="password" value={form.password} placeholder='Password' onChange={(e) => handleForm(e)} style={{ border: 'none', marginRight: 20 }} />

            </div>

        </div>
    )
}

export default Hotspot2
