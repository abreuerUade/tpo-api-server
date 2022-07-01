const mongoose = require ('mongoose');
const recipeSchema = require('../model/Recipe');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        //required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    refreshToken: String,
    recipes: [recipeSchema]

});

module.exports = mongoose.model('User', userSchema);