const express = require('express');
const { registerController, verifyEmailController, loginController, currentUserController } = require('../controllers/authControllers.jsx');
const authMiddlewares = require('../middlewares/authMiddlewares.jsx');
const router = express.Router()

//routes
router.post('/', registerController);

router.get('/verify/:id/:token', verifyEmailController);

//Login || post
router.post('/login', loginController);

//get current user || get
router.get('/current-user', authMiddlewares, currentUserController)

module.exports = router;