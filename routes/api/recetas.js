const express = require('express');
const router = express.Router();
const recetaController = require ('../../controllers/recetasController')


router.route('/')
    
    .post(recetaController.createReceta)      
    .put(recetaController.editReceta)
    .delete(recetaController.deleteReceta);


module.exports = router; 

