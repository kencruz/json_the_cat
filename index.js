const args = process.argv.slice(2);
const query = args[0];
const { fetchBreedDescription } = require("./breedFetcher");

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
