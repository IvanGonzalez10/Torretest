const axios = require("axios");

export const peticion = async (skills) => {
  let datos = skills.map((e) => {
    return { "skill/role": { text: e, experience: "potential-to-develop" } };
  });
  /*   console.log(datos) */
  const resultado = await axios
    .post(
      "https://search.torre.co/people/_search/?page=0&periodicity=hourly&lang=en&size=1&aggregate=false&offset=0",
      {
        and: datos,
      }
    )
      return resultado.data;
};
