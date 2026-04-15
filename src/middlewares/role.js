const rolemidleware = (... rolepermitidos)=>{
    return (req,res,next)=>{
        const user = req.user;

        if(!user){
            return res.status(401).json({
                message:'no autorizado'
            })
        }
        // verificar si el rol esta permitido
        if(!rolepermitidos.includes(user.role)){
            return res.status(403).json({
                message: 'no tienes permisos'
            })
        }
        next();
    }
}
module.exports ={
    rolemidleware
};