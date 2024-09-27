import './App.css'
import StarshipCard from './components/StarshipCard'
import {getAllStarships} from './services/sw-api.jsx'
import { useState, useEffect } from 'react'

function App() {

  useEffect(()=>{
    async function fetchStarships() {
      const data = await getAllStarships();
      //console.log(data);
    }
    fetchStarships();
  }, []);

  return (
    <>
    <h1>STAR WARS STARSHIPS</h1>
    <div className="container">
      <StarshipCard />
    </div>
    </>
  )
}

export default App
