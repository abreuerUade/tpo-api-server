const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    puntaje:{
        type: Number,
        default:0
    },
    fechaCreacion:{
        type: Date,
        default: new Date(),
        immutable: true
    } 

})

module.exports = recipeSchema