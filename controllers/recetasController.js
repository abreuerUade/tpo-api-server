const Recipe = require('../model/Recipe')

const getReceta = async (req,res) => {
    if(!req?.params?.id){
        return res.status(400).json({ 'message': 'Poner datos'});
    }

    const receta = await Recipe.findOne({ _id: req.params._id}).exec();
    if(!receta){
        return res.status(204).json({ 'message': 'No existe para editar'});
    }

    res.json(receta)
}   
 
const getAllRecetas = async (req, res) => {
    const recetas = await Recipe.find();
    if(!recetas) return res.status(204).json({ 'message': 'No hay recetas'});
    res.json(recetas);
}

const createReceta = async (req, res) => {
    if(!req?.body?.name){
        return res.status(400).json({ 'message': 'Poner datos'});
    }
        try {
            const resultado = await Recipe.create({
                name: req.body.name,
                creator: req.body.creator
            });
            
            res.json(resultado);
        } catch (error) {
            console.log(error);
        }
    
}

const editReceta = async (req, res) => {
    if(!req?.body?._id){
        return res.status(400).json({ 'message': 'Tiene que haber id'});
    }

    const receta = await Recipe.findOne({ _id: req.body._id}).exec();
    if(!receta){
        return res.status(204).json({ 'message': 'No existe para editar'});
    }
    if(req.body?.name) receta.name = req.body.name;
    if(req.body?.creator) receta.creator = req.body.creator;

    const resultado = await receta.save();
    res.send(resultado);

}

const deleteReceta = async (req, res) => {
    if(!req?.body?._id){
        return res.status(400).json({ 'message': 'Tiene que haber id'});
    }
    
    const receta = await Recipe.findOne({ _id: req.body._id}).exec();
    if(!receta){
        return res.status(204).json({ 'message': 'No existe para editar'});
    }

    const resultado = await receta.deleteOne({ _id: req.body._id});
    res.send(resultado);
}

module.exports = {
    getReceta,
    getAllRecetas,
    createReceta,
    editReceta,
    deleteReceta,
}