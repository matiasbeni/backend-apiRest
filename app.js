const express = require('express');
const { createUser } = require('./src/Controllers/user.controller');
const app = express();
const userrouter = require('./src/routes/user.routes')
const authRoutes = require('./src/routes/auth.routes');
const taskroutes = require('./src/routes/task.routes');

app.use(express.json());
app.use('/api',userrouter);
app.use('/api/auth',authRoutes);
app.use('/api/',taskroutes);

module.exports = app;