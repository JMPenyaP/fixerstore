
const {Order,OrderItems,Cart,Product}=require("../db")


const createOrder =async(req,res)=>{
  const {userId}=req.body
 
  try {
    const  carItems =await Cart.findAll({where:{UserId: userId}}) 
   
    if (carItems.length === 0) {
        return res.status(400).json({ message: 'El carrito está vacío' });
      }
      let totalAmount = 0;
      const order = await Order.create({totalAmount,status:"pending",UserId:userId})
      for(const car of carItems){
        const product= await Product.findByPk(car.ProductId)
        if(!product){
            return res.status(200).json({succes: false,message:"no se encontro el producto"})
        }
        const price = product.priceOfList
        const quantity = car.quantity
        await OrderItems.create({
            OrderId: order.id,
            ProductId: car.ProductId,
            quantity,
            price,
          });
          totalAmount += price * quantity;
          await car.destroy()
      }
      await order.update({ totalAmount })
      res.status(200).json({message:"Orden creada con exito"})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const getAllOrders=async(req,res)=>{
    try {
        
        const allOrders =await Order.findAll()
       
        allOrders.length?res.status(200).json(allOrders):
        res.status(200).json({message:"no se encontro ninguna orden"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getOrdersbyId = async (req, res) => {
    const { userId } = req.body;
    console.log(userId)
    try {
      const allOrders = await Order.findAll();
      const usersIdFilt = allOrders.filter((or) => or.UserId === userId);
      console.log(usersIdFilt)
      
      let orderPromises = [];
  
      if (usersIdFilt.length>0) {
        usersIdFilt.forEach((element) => {
        
            const orderItemsPromise = OrderItems.findAll({
                where: {
                 OrderId : element.id
                },
          });
          orderPromises.push(orderItemsPromise);
         
        });
  
        const orders = await Promise.all(orderPromises);
        res.status(200).json(orders);
      } else {
        res.status(200).json({ message: "No se encontraron compras" });
      }
    
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
module.exports={
    createOrder,getOrdersbyId,getAllOrders 
}