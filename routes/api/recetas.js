const express = require('express');
const router = express.Router();
const recetaController = require ('../../controllers/recetasController')


router.route('/')
    .get(recetaController.getAllRecetas)
    .post(recetaController.createReceta)      
    .put(recetaController.editReceta)
    .delete(recetaController.deleteReceta);

router.route('/:id')
    .get(recetaController.getReceta)




module.exports = router;

