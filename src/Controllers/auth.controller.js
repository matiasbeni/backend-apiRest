const { login } = require('../services/auth.service');


const loginUser = async (req, res, next) => {
    try {
        const { user, token } = await login(req.body);

        const usersinpassword = user.toObject();
        delete usersinpassword.password;

        res.json({
            message: 'login exitoso',
            token,
            user:usersinpassword
        });

    } catch (error) {
        next(error)
    }
};
module.exports={
    login:loginUser
};