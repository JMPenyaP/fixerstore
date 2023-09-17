const {Category} = require("../db");
const categories = [
  { name: "productos exclusivos" },
  { name: "cordones" },
  { name: "hormas" },
  { name: "plantillas" },
  { name: "taloneras" },
  { name: "cepillos" },
  { name: "productos para limpieza" },
  { name: "productos para el cuidado" },
  { name: "calzadores" },
  { name: "productos para zapatos formales" },
];

const createCategories = async () => {
  const promises = categories.map((cat) => Category.create({ name: cat.name.toLowerCase() }));
  await Promise.all(promises);
};

module.exports = {
  createCategories,
};