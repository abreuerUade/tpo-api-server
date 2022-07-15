const User = require('../model/User');

const modifyUser = (req,res) => {

    const { firstName, lastName, email, phone } = req.body;

    try {
        
        const found = User.findOneAndUpdate({ email: email }, { firstName: firstName, lastName: lastName, phone: phone}).exec()
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