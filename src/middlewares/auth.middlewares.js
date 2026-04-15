const jwt = require('jsonwebtoken');

const authMidlewares =  (req,res,next)=>{

    try{
        // obtener token del header
        const token = req.headers.authorization;
        if(!token){
            return res.status(401).json({
                message:'no hay token'
            });
        }
        // bearer token = extraer eltoken 
        const tokenclean = token.split (' ')[1];
        // verificar token
        const decoded  = jwt.verify(tokenclean,process.env.JWT_SECRET);
        // guardar datos  en request
        req.user = decoded;
        next();
        
    }catch{
        return res.status(401).json({
            message:'token invalido'
        })
    };
};
module.exports = {
    authMidlewares
};