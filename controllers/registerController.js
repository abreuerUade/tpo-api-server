const User = require('../model/User');
const bcrypt = require ('bcrypt');

const handleNewUser = async (req, res) => {
    const { email, pwd } = req.body;

    if (!email || !pwd) return res.status(500).json({'message': 'User y pwd required'}) 

    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); // Conflict

    try{
        const hashedPwd = await bcrypt.hash(pwd, 10);
         
        const resultado = await User.create({ 
            "email": email, 
            "pwd": hashedPwd
        });

        res.status(201).json({'success': 'success'})

    }   
    catch (err) {
        res.status(500).json({'messaje':err.message})
    }

}   

module.exports = {
    handleNewUser
};


