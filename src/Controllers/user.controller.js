const Userservice = require('../services/user.service')
const {deleteuserservice}=require('../services/user.service');
const {updateservice} = require('../services/user.service')

const createUser = async (req, res, next) => {
    try {
        const user = await Userservice.createuser(req.body);
        const usersinpassword = user.toObject();
        delete usersinpassword.password;


        res.status(201).json({

            message: 'Usuario creado',

            user: usersinpassword

        });
        console.log(user)
    } catch (error) {
        next(error);

    }

};

const DeleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deleteuserservice(id);
        res.json({
            message: 'usuario eliminado'
        })

    } catch (error) {
        next(error);
    }


}
const updateUser = async (req , res ,next)=>{
    try{
        const {id} = req.params;
    
        // validamos el permisos
        if(req.user.id !== id && req.user.role !== 'ADMIN'){
            return res.status(403).json({
                message:'no tienes permisos para modificar este usuario'
            })
        }

        const user = await updateservice(id,req.body)
        const usersinpassword = user.toObject()
        delete usersinpassword.password;

        res.json({
            message:'usuario actualizado',
            user:usersinpassword
        });
    }catch(error){
        next(error);
    }
};

module.exports = {
    createUser,DeleteUser,updateUser
}