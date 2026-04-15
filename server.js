const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const conectdb = require('./src/config/db');

conectdb();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`conectado al puerto ${port}`)
    
})