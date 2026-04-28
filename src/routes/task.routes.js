const express = require('express');
const router = express.Router();
const {createtask,gettask,updatetask,deletetask} = require('../Controllers/task.controller');
const {authMidlewares} = require('../middlewares/auth.middlewares');


router.post ('/task',authMidlewares,createtask);
router.get ('/task',authMidlewares,gettask);
router.put ('/task/:id',authMidlewares,updatetask);
router.delete ('/task/:id',authMidlewares,deletetask);







module.exports = router;


