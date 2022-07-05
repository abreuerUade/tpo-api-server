const { obj } = require('../model/Recipe');
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
    const recetas = await User.aggregate([{$unwind:"$recipes"}, {$project:{ _id:1, firstName:1, lastName:1, profilePic:1, email:1, recipes:1}}])
    
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
        category: req.body.category,
        difficulty: req.body.difficulty,
        images: req.body.images,
        ingredients: req.body.ingredients,
        description: req.body.description

    }
    
        try {
            console.log(req.User);
            user.recipes.push(newRecipe);
            await user.save();
            
            return res.status(200).json({ 'message': 'funca'});
            
        } catch (error) {
            
            console.log(error);
        }
    
    
}

const editReceta = async (req, res) => {
    if(!req?.body?._id){
        return res.status(400).json({ 'message': 'Tiene que haber id'});
    }
    let user = await User.findOne({ email: req.User}).exec();
    const oldReceta = user.recipes.filter(obj => {return obj._id === req.body._id });
    const newRecipe = {
        name: req.body.name,
        category: req.body.category,
        difficulty: req.body.difficulty,
        images: req.body.images,
        ingredients: req.body.ingredients,
        description: req.body.description,
        puntaje: oldReceta.puntaje

    }

    
    user.recipes = user.recipes.filter(obj => {return obj._id != req.body._id });

    user.recipes.push(newRecipe);
    const resultado = await user.save();
    return res.status(200).json({ 'message': 'funca'});
    

}

const deleteReceta = async (req, res) => {
    if(!req?.body?._id){
        return res.status(400).json({ 'message': 'Tiene que haber id'});
    }
    
    let user = await User.findOne({ email: req.User}).exec();
    user.recipes = user.recipes.filter(obj => {return obj._id != req.body._id });
    
    const resultado = await user.save();
    res.send(resultado);
}

module.exports = {
    getReceta,
    getAllRecetas,
    createReceta,
    editReceta,
    deleteReceta,
}