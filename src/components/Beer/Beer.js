import React from "react";
import beerImage from "../../assets/img/beer.svg";
import "./Beer.css";
const Beer = ({ beer }) => {
  return (
    <>
      <button className="Button-beer">
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
