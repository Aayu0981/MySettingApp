// import React from 'react'
// import { FaImage } from 'react-icons/fa';
// import React, { useState } from 'react';

// function Wallpaper() {
//   return (
//     <div >

//       <p className='heading'></p>

//       <div>
      

// const wallpapers = [
// 'C:\Users\aamir\OneDrive\Desktop\SettingApp\MySettingApp\src\image.wallpaper',
// C:\Users\aamir\OneDrive\Desktop\SettingApp\MySettingApp\src\image.Ops2'
// ];

// const WallpaperPage = () => {
//   const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//   const changeWallpaper = (wallpaper) => {
//     setSelectedWallpaper(wallpaper);
//   };

//   return (
//     <div
//       className="wallpaper-container"
//       style={{ backgroundImage: `url(${selectedWallpaper})` }}
//     >
//       <div className="wallpaper-selector">
//         <h2>Choose Wallpaper:</h2>
//         <div>
//           {wallpapers.map((wallpaper, index) => (
//             <button key={index} onClick={() => changeWallpaper(wallpaper)}>
//               Wallpaper {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WallpaperPage;

//       </div>
        
//         </div>
//   )
// }

// export default Wallpaper;


// import React, { useState } from 'react';

// function Wallpaper() {
//   const wallpapers = [
//     'C:/Users/aamir/OneDrive/Desktop/SettingApp/MySettingApp/src/image.wallpaper',
//     'C:/Users/aamir/OneDrive/Desktop/SettingApp/MySettingApp/src/image.Ops2'
//   ];

//   const WallpaperPage = () => {
//     const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//     const changeWallpaper = (wallpaper) => {
//       setSelectedWallpaper(wallpaper);
//     };

//     return (
//       <div className="wallpaper-container" style={{ backgroundImage: `url(${selectedWallpaper})` }}>
//         <div className="wallpaper-selector">
//           <h2>Choose Wallpaper:</h2>
//           <div>
//             {wallpapers.map((wallpaper, index) => (
//               <button key={index} onClick={() => changeWallpaper(wallpaper)}>
//                 Wallpaper {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <p className="heading">Wallpaper Page</p>
//       <WallpaperPage />
//     </div>
//   );
// }

// export default Wallpaper;


// import React, { useState } from 'react';

// function Wallpaper() {
//   const wallpapers = [
//     '/image/wallpaper',
//    'C:/Users/aamir/OneDrive/Desktop/SettingApp/MySettingApp/src/image/Ops2'
    
//   ];

//   const WallpaperPage = () => {
//     const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//     const changeWallpaper = (wallpaper) => {
//       setSelectedWallpaper(wallpaper);
//     };

//     return (
//       <div className="wallpaper-container" style={{ backgroundImage: `url(${selectedWallpaper})` }}>
//         <div className="wallpaper-selector">
//           <h2>Choose Wallpaper:</h2>
//           <div>
//             {wallpapers.map((wallpaper, index) => (
//               <button key={index} onClick={() => changeWallpaper(wallpaper)}>
//                 Wallpaper {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <p className="heading">Wallpaper Page</p>
//       <WallpaperPage />
//     </div>
//   );
// }

// export default Wallpaper;



// import React, { useState } from 'react';
// import img1 from '../image/wallpaper.jpg'
// import img2 from '../image/wallpaper3.jpg'


// function Wallpaper() {
//   const wallpapers = [
//     img1, // Replace with the relative path to your first image
//     img2      // Replace with the relative path to your second image
//   ];

//   const WallpaperPage = () => {
//     const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//     const changeWallpaper = (wallpaper) => {
//       setSelectedWallpaper(wallpaper);
//     };

//     return (
//       <div className="wallpaper-container" style={{ backgroundImage: `url(${selectedWallpaper})` }}>
//         <div className="wallpaper-selector">
//           <h2>Choose Wallpaper:</h2>
//           <div>
//             {wallpapers.map((wallpaper) => (

//               <img src={img1} style={{width:40}}  onClick={()=>changeWallpaper(img1)} />

//               <img src={img2} style={{width:40}}  onClick={()=>changeWallpaper(img2)} />
//               // <button key={index} onClick={() => changeWallpaper(wallpaper)}>
//               //   Wallpaper {index + 1}
//               // </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <p className="heading">Wallpaper Page</p>
//       <WallpaperPage />
//     </div>
//   );
// }

// export default Wallpaper;



// import React, { useState } from 'react';

// import img1 from '../image/wallpaper.jpg'
// import img2 from '../image/wallpaper2.jpg'

// function Wallpaper() {
//   const wallpapers = [
//     img1, // Replace with the relative path to your first image
//     img2,      // Replace with the relative path to your second image
//   ];

//   const WallpaperPage = () => {
//     const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//     const changeWallpaper = (wallpaper) => {
//       setSelectedWallpaper(wallpaper);
//     };

//     return (
//       <div className="wallpaper-container" style={{ backgroundImage: `url(${selectedWallpaper})` }}>
//         <div className="wallpaper-selector">
//           <h2>Choose Wallpaper:</h2>
//           <div>
//             {wallpapers.map((wallpaper, index) => (
//               <img
//                 key={index}
//                 src={wallpaper}
//                 style={{ width: 40, cursor: 'pointer' }}
//                 onClick={() => changeWallpaper(wallpaper)}
//               />
//             )};
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <p className="heading">Wallpaper Page</p>
//       <WallpaperPage />
//     </div>
//   );
// }

// export default Wallpaper;


// import React, { useState } from 'react';

// import img1 from '../image/wallpaper.jpg';
// import img2 from '../image/wallpaper2.jpg';

// function Wallpaper() {
//   const wallpapers = [img1, img2];

//   const WallpaperPage = () => {
//     const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

//     const changeWallpaper = (wallpaper) => {
//       setSelectedWallpaper(wallpaper);
//     };

//     return (
//       <div className="wallpaper-container" style={{ backgroundImage: `url(${selectedWallpaper})` }}>
//         <div className="wallpaper-selector">
//           <h2>Choose Wallpaper:</h2>
//           <div>
//             {wallpapers.map((wallpaper, index) => (
//               <img
//                 key={index}
//                 src={wallpaper}
//                 style={{ width: 40, cursor: 'pointer' }}
//                 onClick={() => changeWallpaper(wallpaper)}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <p className="heading">Wallpaper Page</p>
//       <WallpaperPage />
//     </div>
//   );
// }

// export default Wallpaper;

import React, { useEffect, useState } from 'react';
import wallppr1 from '../image/wallppr1.jpg';
import wallppr2 from '../image/wallppr2.jpg';
import wallppr3 from '../image/wallppr3.jpg';
import wallppr4 from '../image/wallppr4.jpg';
import { useNavigate } from 'react-router-dom/dist';
import { FaArrowLeft } from 'react-icons/fa';

function Wallpaper() {

  const navigate=useNavigate();

  const [wallPaper,setWallpaper]= useState(wallppr1);

  const togleWallPaper= (e)=>{
    setWallpaper(e.target.name);
  }

  


  return (
    <div className='wallppr' style={{ backgroundImage: `url(${wallPaper})` }}>
    <div style={{width:350}}>

    <div style={{marginLeft:-5}} onClick={()=> navigate(-1)}>
            <p className='back'><FaArrowLeft/></p>
        </div>

      <p className='heading'  style={{ marginLeft: 10 }}>Wallpaper</p>

      <div className='Modes'>
        <p className='Darktext1'>Editor's picks</p>
        <p className='Lighttext'>MORE</p>
      </div>

      <div className='wallpprList'>
        <img src={wallppr1} alt="" className='wallpprstogle' name={wallppr1} onClick={(e)=>togleWallPaper(e)}   />
        <img src={wallppr2} alt="" className='wallpprstogle' name={wallppr2} onClick={(e)=>togleWallPaper(e)} />
        <img src={wallppr3} alt="" className='wallpprstogle' name={wallppr3} onClick={(e)=>togleWallPaper(e)} />
        <img src={wallppr4} alt="" className='wallpprstogle' name={wallppr4} onClick={(e)=>togleWallPaper(e)} />
      </div>
     

     <div>
           
           

     </div>







    </div>
    </div>
  )
}

export default Wallpaper

