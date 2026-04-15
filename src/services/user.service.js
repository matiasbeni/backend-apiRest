const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { hashpassword } = require('../utils/has')


const createuser = async (data) => {
    const { name, email, password } = data

    const userExist = await User.findOne({ email });
    email: email.trim().toLowerCase()
    if (userExist) {
        throw new Error('el usuario ya existe')
    }

    const haspassword = await hashpassword(password);

    const user = await User.create({
        name,
        email,
        password: haspassword

    })
    console.log("USUARIO CREADO:", user);
    return user;

};
const deleteuserservice = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('usuario no existe');
    }
    await User.findByIdAndDelete(id);
    return true;
}
const updateservice = async (id, data) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('usuario no existe')
    }
    // si viene el password encriptar
    if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt)
    }
    const updateuser = await User.findByIdAndUpdate(
        id,
        data,
        { new: true }
    )
    return updateuser;
};

module.exports = {
    createuser,
    deleteuserservice,
    updateservice
};
