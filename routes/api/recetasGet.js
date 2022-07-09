const express = require('express');
const router = express.Router();
const recetaController = require ('../../controllers/recetasController')


router.route('/:id').get(recetaController.getReceta)

router.route('/').get(recetaController.getAllRecetas)



module.exports = router; 

