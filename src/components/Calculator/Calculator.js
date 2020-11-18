export const Calculator = (habilidades, presupuesto) => {
  if (habilidades.length > 0) {
    return presupuesto - habilidades.length * 100;
  } else {
    return presupuesto;
  }
};
