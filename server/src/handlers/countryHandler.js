const {createCountry,
    getAllCountries,
    getCountryByName}= require("../controllers/countrysControllers")

    const createCountryHandler = async(req,res)=>{
        const {name } = req.body
        try {
            const newCountry = await createCountry(name)
           res.status(200).json(newCountry) 
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    const getCountriesHandler = async(req,res)=>{
        const {name} = req.query
        try {
            const allCountries = []
            name?allCountries = await getCountryByName():
            allCountries = await getAllCountries()
            res.status(200).json(allCountries)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    module.exports ={
        getCountriesHandler,
        createCountryHandler
    }