import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';



function Bluetooth() {

  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:4000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);
      setIsBluetoothOn(response.data.bluetooth);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
  const toggleBluetooth = async () => {
    setIsBluetoothOn(!isBluetoothOn);

  }

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/bluetoothtogle`, {
          tog: `${isBluetoothOn}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }

    }
    post();
  }, [isBluetoothOn]);




  return (
    <div style={{ width: 350 }}>


      <div style={{ marginLeft: 0 }} onClick={() => navigate(-1)}>
        <p><FaArrowLeft /></p>
      </div>


      <p style={{ marginLeft: 30 }} className='heading'>Bluetooth</p>

      <div className='Modes' style={{ marginLeft: 20 }}>
        <p className='Darktext' >Bluetooth</p>

        <label className="switch" >
          <input type="checkbox" onChange={toggleBluetooth} checked={isBluetoothOn} />
          <span className="slider round"></span>
        </label>

      </div>

      <div className='Modes' style={{ marginLeft: 20 }}>
        <p className='Darktext1'>Device name</p>
        <p className='Lighttext'>POCO M4 Pro &gt;</p>
      </div>

      <hr style={{ opacity: 0.5 }} />

      <div>
        <p className='Lighttext' style={{ marginLeft: 20, marginTop: 20 }}>ADDITONAL SETTINGS</p>
      </div>

      <div style={{ marginLeft: 20 }} className='Modes' onClick={() => navigate("/Bluetooth1")}>
        <p className='Darktext1'>Additional settings</p>
        <p className='Lighttext'>&gt;</p>
      </div>




    </div>

  )
}

export default Bluetooth;

