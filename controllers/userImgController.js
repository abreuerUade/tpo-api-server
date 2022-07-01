const { cloudinary } = require('../utils/cloudinary.js');

const uploadUserImg = async (req,res) => {
    try {
        const fileString = req.body.data;   
        const response = await cloudinary.uploader.upload(fileString, {upload_preset: 'profile'});
        console.log(response);
        res.json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({err:'Algo salio MUY mal'})
    }
}

module.exports = {uploadUserImg};