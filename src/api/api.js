import axios from "axios";

export const getBeers = async () => {
  return axios
    .get("http://localhost:8080/api/v1/beer/")
    .then((beersData) => {
      return beersData;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error("Error", e.message);
    });
};
