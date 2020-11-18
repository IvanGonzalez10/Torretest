const axios = require("axios");

export const peticion = (skill) => {
  axios.post("https://search.torre.co/people/_search/?page=0&periodicity=hourly&lang=en&size=5&aggregate=false&offset=0",
  {
    "skill/role": { text: skill, experience: "1-plus-year"},
  }
  )
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });
}