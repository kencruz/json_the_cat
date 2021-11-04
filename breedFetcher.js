const request = require("request");

const fetchBreedDescription = (breedName, callBack) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, _response, body) => {
      let desc;
      const data = JSON.parse(body);
      if (!data[0]) {
        desc = "Breed not found";
      } else {
        desc = data[0].description;
      }
      callBack(error, desc);
    }
  );
};

module.exports = { fetchBreedDescription };
