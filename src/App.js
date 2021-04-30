import React, { useEffect, useState } from "react";
import "./App.css";
import { getBeers } from "./api/api";
import BeerList from "./components/BeerList/BeerList";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers().then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
      setBeers(res.data);
      
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Beers-wrapper">
          <BeerList beersList={beers} />
        </div>
      </header>
    </div>
  );
}

export default App;
