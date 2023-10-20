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

import React from 'react'

function Wallpaper() {
  return (
    <div>
      <h1>hiiii</h1>
    </div>
  )
}

export default Wallpaper

