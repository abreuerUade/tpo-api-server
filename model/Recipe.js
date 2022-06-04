const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Recipe', recipeSchema);