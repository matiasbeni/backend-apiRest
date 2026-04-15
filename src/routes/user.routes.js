const express = require('express');
const router = express.Router();
const { createUser } = require('../Controllers/user.controller');
const { authMidlewares } = require('../middlewares/auth.middlewares');
const {rolemidleware} = require('../middlewares/role');
const {DeleteUser}=require('../Controllers/user.controller');
const {updateUser} = require('../Controllers/user.controller');

router.get('/admin', authMidlewares,rolemidleware('ADMIN'), (req, res) => {
    res.json({
        message: 'solo los admin pueden ver esto',
        user: req.user,
    })
})

router.post('/register', createUser);

router.put('/user/:id',authMidlewares, updateUser);
router.delete('/user/:id',authMidlewares,rolemidleware('ADMIN'),DeleteUser)

module.exports = router;
