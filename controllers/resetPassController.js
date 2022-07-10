const User = require('../model/User');
const bcrypt = require ('bcrypt');

const resetPass = async (req, res) => {

    const { email, pwd } = req.body

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);

        const found = User.findOneAndUpdate({ email: email }, { pwd: hashedPwd}).exec()
        if (!found) 
            {return res.sendStatus(409);
        }
        else {
            return res.status(201).json({'success': 'success'})

        }

    } catch (error) {
        console.error(error);
    }



}

module.exports = {resetPass}