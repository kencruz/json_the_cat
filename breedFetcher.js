const args = process.argv.slice(2);
const query = args[0];
const request = require("request");
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  (error, response, body) => {
    if (error) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        console.log("Breed not found");
      } else {
        console.log(data[0].description);
      }
    }
  }
);
