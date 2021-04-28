import React, { useEffect, useState } from 'react';
import axios from 'axios';
import beer from "./assets/img/beer.svg";
import "./App.css";

function App() {
  
const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/beers/")
    .then(res => {
      const beersData = res.data;
      setBeers(beersData)
      console.log(beersData)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {beers.map((b, index) => {

          const { name, type, country, quantity } = b;
          return (
            <div key={index} >
            <img src={beer} className="App-logo" alt="logo" />
            <h4>{name} - <span style={{"font-style": "italic"}}>{type}</span></h4>
            <p>{quantity} beers available</p>
            <p>{country}</p>
            </div>
          )

        })}
        
      </header>
    </div>
  );
}

export default App;
