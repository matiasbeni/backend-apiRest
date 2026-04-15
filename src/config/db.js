const mongoose = require('mongoose');


const conectdb = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('conectado a mongodb')

    } catch (error) {
        console.log(error);
        process.exit(1);

    }

}
module.exports = conectdb;