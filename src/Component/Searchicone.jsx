import React from 'react'
import { FaPhone, FaSearch } from 'react-icons/fa'; // Example using Font Awesome


function searchicone() {
  return (
    <div>
 <h1>Settings</h1>

 <div id='box1' >
  <label className="input-label">
    <span className="search-icon" >&#128269;</span>

    <input id='searchbox' type="text" placeholder="Search settings" />
  </label>
</div>

   


    </div>
  )
}

export default searchicone;