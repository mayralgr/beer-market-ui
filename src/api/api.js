import axios from "axios";

export const getBeers = async () => {
  return axios
    .get("http://localhost:5000/api/v1/beers/")
    .then((beersData) => {
      return beersData;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error("Error", e.message);
    });
};
