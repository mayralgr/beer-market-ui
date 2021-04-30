import React from "react";
import { createBeerOrder } from "../../api/api";
import beerImage from "../../assets/img/beer.svg";
import "./Beer.css";
const Beer = ({ beer }) => {

  const handleBeerOrder = () =>{
      const beerOrder = {
        beer: beer.id,
        quantity: 1
      }
      createBeerOrder(beerOrder)
      alert('You bought a ' + beer.name + ' from ' + beer.country)
  }

  return (
    <>
      <button className="Button-beer" onClick={handleBeerOrder}>
        <img src={beerImage} className="App-logo" alt="logo" />
        <div>
          <h4>
            {beer.name} -{" "}
            <span style={{ fontStyle: "italic" }}>{beer.type}</span>
          </h4>
          <p>{beer.quantity} beers available</p>
          <p>{beer.country}</p>
        </div>
      </button>
    </>
  );
};

export default Beer;
