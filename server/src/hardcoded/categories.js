const {Category} = require("../db");
const categories = [
  { name: "Productos exclusivos" },
  { name: "Cordones" },
  { name: "Hormas" },
  { name: "Plantillas" },
  { name: "Taloneras" },
  { name: "Cepillos" },
  { name: "Productos para limpieza" },
  { name: "Productos para el cuidado" },
  { name: "Calzadores" },
  { name: "Productos para zapatos formales" },
];

const createCategories = async () => {
  const promises = categories.map((cat) => Category.create({ name: cat.name.toLowerCase() }));
  await Promise.all(promises);
};

module.exports = {
  createCategories,
};