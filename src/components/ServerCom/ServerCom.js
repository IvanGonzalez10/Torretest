const axios = require("axios");

export const peticion = (skills) => {
  let datos = skills.map((e) => {
    return {'skill/role': {text: e, experience: 'potential-to-develop'}}
  });
/*   console.log(datos) */
  axios.post("https://search.torre.co/people/_search/?page=0&periodicity=hourly&lang=en&size=5&aggregate=false&offset=0",
  {
    and: datos
  }
  )
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error)
  });
}