import React from "react";
import Beer from "../Beer/Beer";

const BeerList = ({ beersList }) => {
  return (
    <>
      {beersList.map((b, index) => {
        return (
          <>
            <Beer key={index} beer={b} />
          </>
        );
      })}
    </>
  );
};

export default BeerList;
