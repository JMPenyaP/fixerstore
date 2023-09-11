
const { Country } = require('../db');


const createCountry = async (name) => {

    return await Country.create({ name });

};

const getAllCountries = async () => {

    const allCountries = await Country.findAll();
    return allCountries;

};

const getCountryByName = async (name) => {

    const countryName = await Country.findAll({ where: { name: name } });
    return countryName;

}


module.exports = {

    createCountry,
    getAllCountries,
    getCountryByName

}