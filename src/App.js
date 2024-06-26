
import './App.css';
import './Aboutphone1.css';
import './Sound2.css';
import './Sound.css';
import './About2.css';
import './Wallpaper.css';
// import Aboutphone1 from './Component/Aboutphone1';
import Searchicone from "./Component/Searchicone";
import Systemupdater from './Component/Systemupdater';
import Security from './Component/Security';
import Airoplane from './Component/Airoplane';
import DandB from './Component/DandB';
import Sound from './Component/Sound';
import Bluetooth from './Component/Bluetooth'
import Notification from './Component/Notification';
import HomeScreen from './Component/HomeScreen';
import Wallpaper from './Component/Wallpaper';
import Theme from './Component/Theme';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Connection from './Component/Connection';
import { useState, useEffect } from 'react';
import axios from 'axios';





// Inside Component import

import Sound1 from './Component2/Sound1';
import Connection1 from './Component2/Connection1';
import DandB1 from './Component2/DandB1';
import Bluetooth1 from './Component2/Bluetooth1';
import Aboutphone1 from './Component/Aboutphone1';
import About2 from './Component2/About2';
import About3 from './Component2/About3';
import About4 from './Component2/About4';
import About5 from './Component2/About5';
import About6 from './Component2/About6';
import Security1 from './Component2/Security1';
import Security3 from './Component2/Security3';
import Sound2 from './Component2/Sound2';
import Sound3 from './Component2/Sound3';
import About7 from './Component2/About7';
import Notification1 from './Component2/Notification1';
import Notification2 from './Component2/Notification2';
import Notification3 from './Component2/Notification3';
import DandB2 from './Component2/DandB2';
import DandB3 from './Component2/DandB3';
import DandB4 from './Component2/DandB4';
import Notification4 from './Component2/Notification4';
import Systemupdater1 from './Component2/Systemupdater1';
import Legalinfo from './Component2/Legalinfo';
import Status from './Component2/Status';
import Textsize from './Component2/Textsize';
import Hotspot from './Component/Hotspot';
import Hotspot2 from './Component2/Hotspot2';





function App() {
  const BASE_URL = 'http://localhost:4000';


  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getUserData`);

      setBrightness(response.data.display.brightness.level);
      setDarkModeOn(response.data.display.darkmode)

    } catch (error) {
      console.error('Error:', error.message);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const [brightness, setBrightness] = useState(100);

  useEffect(() => {
    document.body.style.background = `rgba(0, 0, 0, ${(100 - brightness) / 100})`;
    if(brightness<20 && isDarkmodeOn===false){
      setDarkModeOn(true);
    }
    else if(brightness>=20 && isDarkmodeOn===true) 
      setDarkModeOn(false);
    
  }, [brightness]);


  const toglebrightness = (newvalue) => {
    setBrightness(newvalue);
  }


  //for darkmode
  const [isDarkmodeOn, setDarkModeOn] = useState(false);
    
  const togleDarkMode = (newvalue) => {
    setDarkModeOn(newvalue);
  }


  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/darkmodetogle`, {
          tog: `${isDarkmodeOn}`
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error toggling airplane mode', error.message);
      }

    }
    post();

    if (isDarkmodeOn === true) {

      setBrightness(0);

      document.body.style.color = `#ffffff`;

    }
    else {
      
      setBrightness(100);
      document.body.style.color = 'rgb(0, 0, 0)';

    }

  }, [isDarkmodeOn]);


  return (


    <div className='app' >


      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Airoplane' Component={Airoplane}></Route>
        <Route path='/Aboutphone1' Component={Aboutphone1} />
        <Route path='/Bluetooth' Component={Bluetooth}></Route>
        <Route path='/Systemupdater' Component={Systemupdater}></Route>
        <Route path='/Systemupdater1' Component={Systemupdater1}></Route>
        <Route path='/Hotspot' Component={Hotspot}></Route>
        <Route path='/Hotspot2' Component={Hotspot2}></Route>

        {/* About pages path start */}
        <Route path='/About2' Component={About2}></Route>
        <Route path='/About3' Component={About3}></Route>
        <Route path='/About4' Component={About4}></Route>
        <Route path='/About5' Component={About5}></Route>
        <Route path='/About6' Component={About6}></Route>
        <Route path='/About7' Component={About7}></Route>
        <Route path='/Legalinfo' Component={Legalinfo}></Route>
        <Route path='/Status' Component={Status}></Route>

        {/* security path start */}
        <Route path='/Security' Component={Security}></Route>
        <Route path='/Security1' Component={Security1}></Route>
        <Route path='/Security3' Component={Security3}></Route>

        {/* Display path start */}
        <Route path='/DandB' element={<DandB setDarkModeOn={togleDarkMode}/>}></Route>
        <Route path='/DandB1' element={<DandB1 />} />
        <Route path="/DandB2" element={<DandB2 setBrightness={toglebrightness} />} />
        <Route path='/DandB3' Component={DandB3}></Route>
        <Route path='/DandB4' Component={DandB4}></Route>
        <Route path='/Textsize' Component={Textsize}></Route>


        {/* sound path start */}
        <Route path='/Sound' Component={Sound}></Route>
        <Route path='/Sound1' Component={Sound1}></Route>
        <Route path='/Sound2' Component={Sound2}></Route>
        <Route path='/Sound3' Component={Sound3}></Route>


        {/* wifi-->connecton  path start */}
        <Route path='/Connection' Component={Connection}></Route>
        <Route path='/Connection1' Component={Connection1}></Route>

        {/* bluetooth path start */}
        <Route path='/Bluetooth1' Component={Bluetooth1}></Route>

        {/* Notification path start */}
        <Route path='/Notification' Component={Notification}></Route>
        <Route path='/Notification1' Component={Notification1}></Route>
        <Route path='/Notification2' Component={Notification2}></Route>
        <Route path='/Notification3' Component={Notification3}></Route>
        <Route path='/Notification4' Component={Notification4}></Route>


        <Route path='/Wallpaper' Component={Wallpaper}></Route>

     
       
      </Routes>






    </div>
  );
}

export default App;



