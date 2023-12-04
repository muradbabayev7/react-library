import { useState } from "react";
import Footer from "./Layout/Footer";
import Hero from "./Layout/Hero";
import "./app.css"
import axios from "axios";
import Main from "./Layout/Main";

function App() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  const [error,setError] = useState("")
  const handleSearch = async (search)=> {
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search.name}&printType=books&key=AIzaSyDC01MFWpxAsC5MbqEGTf09Gui0QZzYpiU&maxResults=40`).then(res=>{
      setData(res.data.items)        
    }).catch(error=>{
      setError(error)
      console.error(error)
    })
  }

  return (
    <div className="App">
      <Hero search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      <Main data={data}/>
      <Footer/>
    </div>
  );
}

export default App;