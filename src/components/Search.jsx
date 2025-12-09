import React from "react";
import "../styles/search.css";

function Search({setSearchText}) {
  
  const handleInput=(e)=>{
    setSearchText(e.target.value)
  }
  return (
    <div className="search-wrapper">
      <input type="text" onChange={handleInput} placeholder="Search..." className="search-input" />
    </div>
  );
}

export default Search;
