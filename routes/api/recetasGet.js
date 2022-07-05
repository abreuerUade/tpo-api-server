const express = require('express');
const router = express.Router();
const recetaController = require ('../../controllers/recetasController')


router.route('/')
    .get(recetaController.getAllRecetas)

router.route('/:id')
    .get(recetaController.getReceta)




module.exports = router; 

