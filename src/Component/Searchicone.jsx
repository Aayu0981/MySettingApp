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


function SearchIcone() {

  const initialSettings = [
    'About phone',
    'System aaps updater',
    'Security status',
    'Wi-Fi',
    'Bluetooth',
    'Sound & vibrartion',
    'Notifications & control centre',
    'Wallpaper',
    'Hotspot'
  ];


  const [searchText, setSearchText] = useState('');
  const [filteredSettings, setFilteredSettings] = useState(initialSettings);

  const handleSearch = (text) => {
    const filtered = initialSettings.filter((setting) =>
      setting.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSettings(filtered);
  };

  const handleSearchInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    handleSearch(text);
  };

  return (
    <div>
 <h1>Settings</h1>

 <div id='box1' >
  <label className="input-label">
    <span className="search-icon" >&#128269;</span>

    <input id='searchbox' type="text" placeholder="Search settings" />
  </label>
</div>



<ul>
        {filteredSettings.map((setting, index) => (
          <li key={index}>{setting}</li>
        ))}
      </ul>

   


    </div>
  )
}

export default SearchIcone;