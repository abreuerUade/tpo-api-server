const User = require('../model/User');
const bcrypt = require ('bcrypt');

const resetPass = async (req, res) => {

    const { email, pwd, oldPwd } = req.body

    if(req.body.oldPwd){
        const foundUser = await User.findOne({ email: email }).exec();
        const match = await bcrypt.compare(oldPwd, foundUser.pwd)
        console.log("1");
        if (!match){
            return res.status(409)
        }
        
    }

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        console.log("2");
        const found = User.findOneAndUpdate({ email: email }, { pwd: hashedPwd}).exec()
        if (!found) 
            {return res.sendStatus(409);
        }
        else {
            return res.status(201)

        }

    } catch (error) {
        console.error(error);
    }



}

module.exports = {resetPass}