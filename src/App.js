
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
import Home from './Home';
import Connection from './Component/Connection';



// Inside Component import

import Sound1 from './Component2/Sound1';
import Connection1 from './Component2/Connection1';
import DandB1 from './Component2/DandB1';
import Bluetooth1 from './Component2/Bluetooth1';
import Aboutphone1 from './Component2/Aboutphone1';
import About2 from './Component2/About2';
import About3 from './Component2/About3';
import About4 from './Component2/About4';
import About5 from './Component2/About5';
import About6 from './Component2/About6';
import Security1 from './Component2/Security1';
import Security3 from './Component2/Security3';
import Sound2 from './Component2/Sound2';
import Sound3 from './Component2/Sound3';




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



