import React from "react";
import "./hero.css";

const Hero = ({search,setSearch,handleSearch}) => {
  const handleSubmit = async (e)=>{
    e.preventDefault()
    await handleSearch({name:search})
  }
  return (
    <div className="hero">
      <h1>Dada Book Searching App</h1>
        <form class="form-inline" onSubmit={handleSubmit}>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Find book"
            aria-label="Search" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
    </div>
  );
};

export default Hero;
