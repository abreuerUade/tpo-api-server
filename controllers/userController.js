const User = require('../model/User');

const modifyUser = (req,res) => {

    const { firstName, lastName, email } = req.body;

    try {
        
        const found = User.findOneAndUpdate({ email: email }, { firstName: firstName, lastName: lastName}).exec()
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

module.exports = {modifyUser}