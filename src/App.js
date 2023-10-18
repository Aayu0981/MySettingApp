
import './App.css';
import './Aboutphone1.css';
import './Sound2.css';
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
import Aboutphone1 from './Component/Aboutphone1';
import Home from './Home';
import About2 from './Component/About2';
import About3 from './Component/About3';
import About4 from './Component/About4';
import Security1 from './Component/Security1';
import Security3 from './Component/Security3';
import DandB1 from './Component/DandB1';
import Sound1 from './Component/Sound1';
import Sound2 from './Component/Sound2';
import Sound3 from './Component/Sound3';
import Connection from './Component/Connection';
import Connection1 from './Component/Connection1';
import Bluetooth1 from './Component/Bluetooth1';
import About5 from './Component/About5';
import About6 from './Component/About6';






function App() {
  return (


    <div >
     
     
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Airoplane' Component={Airoplane}></Route>
        <Route path='/Aboutphone1' Component={Aboutphone1}/>
        <Route path='/Bluetooth' Component={Bluetooth}></Route>
       <Route path='/About2' Component={About2}></Route>
       <Route path='/About3'Component={About3}></Route>
       <Route path='/About4' Component={About4}></Route>
       <Route path='/About5' Component={About5}></Route>
       <Route path='/About6' Component={About6}></Route>
       {/* security path start */}
       <Route path='/Security' Component={Security}></Route>
       <Route path='/Security1' Component={Security1}></Route>
       <Route path='/Security3'Component={Security3}></Route>

       {/* Display path start */}
       <Route path='/DandB' Component={DandB}></Route>

       {/* sound path start */}
       <Route path='/Sound' Component={Sound}></Route>
       <Route path='/Sound1'Component={Sound1}></Route>
       <Route path='/Sound2'Component={Sound2}></Route>
       <Route path='/Sound3'Component={Sound3}></Route>

       
       {/* wifi-->connecton  path start */}
       <Route path='/Connection'Component={Connection}></Route>
       <Route path='/Connection1'Component={Connection1}></Route>

        {/* bluetooth path start */}
        <Route path='/Bluetooth1'Component={Bluetooth1}></Route>
      </Routes>
     
   


     
    
    </div>
  );
}

 export default App;



