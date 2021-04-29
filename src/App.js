import React, { useEffect, useState } from "react";
import beer from "./assets/img/beer.svg";
import "./App.css";
import { getBeers } from "./api/api";

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
        {beers.map((b, index) => {
          const { name, type, country, quantity } = b;
          return (
            <div key={index}>
              <img src={beer} className="App-logo" alt="logo" />
              <h4>
                {name} - <span style={{ fontStyle: "italic" }}>{type}</span>
              </h4>
              <p>{quantity} beers available</p>
              <p>{country}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
