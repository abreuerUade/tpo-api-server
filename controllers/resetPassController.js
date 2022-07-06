const User = require('../model/User');
const bcrypt = require ('bcrypt');

const resetPass = async (req, res) => {

    const { email, pwd } = req.body

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);

        const rta = User.findOneAndUpdate({ email: email }, { pwd: hashedPwd}).exec()
        
        res.status(201).json({'success': 'success'})
    } catch (error) {
        console.error(error);
    }



}

module.exports = {resetPass}