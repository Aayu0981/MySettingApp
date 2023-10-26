// import React from 'react'
// import { FaPhone, FaSearch } from 'react-icons/fa'; // Example using Font Awesome


// function searchicone() {
//   return (
//     <div>
//  <h1>Settings</h1>

//  <div id='box1' >
//   <label className="input-label">
//     <span className="search-icon" >&#128269;</span>

//     <input id='searchbox' type="text" placeholder="Search settings" />
//   </label>
// </div>

   


//     </div>
//   )
// }

// export default searchicone;



import React from 'react'
import { FaPhone, FaSearch } from 'react-icons/fa'; // Example using Font Awesome
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';



function SearchIcone() {

  const navigate = useNavigate();


  
  const list=[
  { name:'About phone',link:"/Aboutphone1" },
  { name:'System aaps updater' ,link:"/Systemupdater" },
  { name:'Security status',link:"/Security" },
  { name:'WiFi',link:"/Connection" },
  { name:'Bluetooth',link:"/Bluetooth" },
  { name:'Sound & vibrartion',link:"/Sound" },
  { name:'Notifications & control centre',link:"/Notification" },
   { name:'Wallpaper',link:"/Wallpaper" },
  { name:'Hotspot' , link: "/Hotspot" },
  {name:'Brightness',link:"/DandB2"}
 ];

const [filterlist,setFilterlist]=useState(list);
const [searchText, setSearchText] = useState('');

const handleSearch = (event) => {
  const input = event.target.value.toLowerCase();
  setSearchText(input);

  if (input === '') {
    setFilterlist(list);
  } else {
    const filteredValues = list.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setFilterlist(filteredValues);
  }
};


  return (

   
   

    <div style={{ position: 'relative' }}>
      <h1>Settings</h1>

      <div id="box1">
        <label className="input-label">
          <span className="search-icon">&#128269;</span>
          <input
            id="searchbox"
            name="query"
            type="text"
            placeholder="Search settings"
            onChange={handleSearch}
          />
        </label>
      </div>

      {searchText && (
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: 0,
            backgroundColor: '#fff',
            border: '3px solid #ddd',
            borderRadius:'15px',
            paddingRight:"15px",
            
            zIndex: 1,
            width:"80%"
            
          }}
        >
          {filterlist.map((item, index) => (
            <div key={index} className='searchFilteredElement'>
              <div onClick={()=>{navigate(`${item.link}`)}}>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>

  )
}

export default SearchIcone;
