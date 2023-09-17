const {User}=require("../db")

const user = {
    email:"admin@gmail.com",
    password:"123456",
    role:"admin",
    name:"Julian",
    surname:"Perez",
    phone:"3152235421",
    address:"calle 30 Kra 15 #8",
    neighborhood:"Kenedy",
    department:"Cundinamarca"
  }

  const createAdmin = async()=>{
    await User.create({email:user.email,password:user.password,role:user.role,name:user.name,surname:user.surname,phone:user.phone,address:user.address,neighborhood:user.neighborhood,department:user.department})
  }

  module.exports={
    createAdmin
  }