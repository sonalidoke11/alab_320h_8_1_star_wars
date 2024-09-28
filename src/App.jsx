import './App.css'
import StarshipCard from './components/StarshipCard'
import {getAllStarships} from './services/sw-api.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(()=>{
    async function fetchStarships() {
      const data = await getAllStarships();
      //console.log(data);
      setStarships(data);
      //console.log(starships);
      
    }
    fetchStarships();
  }, []);

  return (
    <>
    <h1>STAR WARS STARSHIPS</h1>
    <div className="container">
      {starships.length > 0 ? (
        starships.map(starship => (          
            <StarshipCard key={starship.name} starship={starship} />
          ))
          ) : (
            <p>Fetching starships...</p>
          )}
    </div>
    </>
  )
}

export default App
