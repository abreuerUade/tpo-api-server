const express = require('express');
const router = express.Router();
const recetaImgController = require ('../../controllers/recetaImgController');

router.route('/').post(recetaImgController.uploadRecetaImg);

module.exports = router;