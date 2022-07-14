const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.put('/', userController.modifyUser);

module.exports = router;