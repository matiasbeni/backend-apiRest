const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const {comparepassword} = require('../utils/has')
const {generatetoken} = require('../utils/token');

const login = async ({email,password})=>{
    // buscar usuario
    const users = await User.find();
console.log("USUARIOS EN DB:", users);
    const user = await User.findOne({email}); 
    console.log('usuario encontrado',user);
    if(!user){
        throw new Error ('El usuario no existe')
    }

    // comparar password
    const isMatch = await comparepassword(password,user.password);
       
      // generar token
      const token = generatetoken(user);
    return {user,token};
}
module.exports= {login};