const { getAllProductsItems,
    createProductItem}= require("../controllers/productsItemsControllers")

const createProductItemHandler= async(req,res)=>{
   const {productItem} = req.body
   try {
       const newProductItem = await createProductItem(productItem)
       res.status(200).json(newProductItem)
   } catch (error) {
       res.status(400).json({error:error.message})
   }
}   

const getAllProductItemsHandler= async(req,res)=>{
  try {
    const allProductItems = await getAllProductsItems()
    res.status(200).json(allProductItems)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}
module.exports={
    getAllProductItemsHandler,
    createProductItemHandler
}