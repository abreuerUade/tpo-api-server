const Recipe = require('../model/Recipe');
const User = require('../model/User');

const getReceta = async (req,res) => {
    if(!req?.params?.id){
        return res.status(400).json({ 'message': 'Poner datos'});
    }

    const receta = await Recipe.findOne({ _id: req.params.id}).exec();
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
    let user = await User.findOne({ email: req.User}).exec();
    const newRecipe = {
        name: req.body.name,
        creator: req.body.creator,
        category: req.body.category,
        difficulty: req.body.difficulty,
        images: req.body.images,
        ingredients: req.body.ingredients,
        description: req.body.description

    }

    

        try {
            user.recipes.push(newRecipe);
            const resultado = await user.save();
            return res.status(200).json({ 'message': 'funca'});
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