const express = require('express');
const router = express.Router();
const resetController = require ('../controllers/resetPassController')


router.route('/').post(resetController.resetPass)      


module.exports = router; 