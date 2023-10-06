const express = require('express');
const { registerController, loginController, currentUserController, verifyController } = require('../controllers/authController.jsx');
const authMiddleware = require('../middlewares/authMiddleware.jsx');

//router object
const router = express.Router();

//routes
//Register || post
router.post('/register', registerController);

// Verify || post
router.post('/verify-email', verifyController)

//Login || post
router.post('/login', loginController);

//get current user || get
router.get('/current-user', authMiddleware, currentUserController)

//exports
module.exports = router;