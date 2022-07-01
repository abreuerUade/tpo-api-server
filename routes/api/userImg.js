const express = require('express');
const router = express.Router();
const userImgController = require ('../../controllers/userImgController');

router.route('/').post(userImgController.uploadUserImg);