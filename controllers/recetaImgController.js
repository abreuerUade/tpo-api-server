const { cloudinary } = require('../utils/cloudinary.js');

const uploadRecetaImg = async (req,res) => {
    try {
        const fileString = req.body.data;   
        const response = await cloudinary.uploader.upload(fileString, {upload_preset: 'recetas'});
        console.log(response);
        res.json({msg:'Subido con exito'});
    } catch (error) {
        console.error(error);
        res.status(500).json({err:'Algo salio MUY mal'})
    }
}

module.exports = {uploadRecetaImg};