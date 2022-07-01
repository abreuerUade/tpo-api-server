const User = require('../model/User'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {

    const { email, pwd } = req.body

    if (!email || !pwd) return res.status(400).json({'message': 'User y pwd required'}) 

    const foundUser = await User.findOne({ email: email }).exec();
    if(!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(pwd, foundUser.pwd);

    if(match) {
        
        const accessToken = jwt.sign(
            {"email": foundUser.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '3000s'}
        )

        const refreshToken = jwt.sign(
            {"email": foundUser.email},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        )
        
        foundUser.refreshToken = refreshToken;
        const resultado = await foundUser.save();

        res.cookie('jwt', refreshToken, { 
            httpOnly: true, 
            sameSite: 'none', 
            //secure: true, 
            maxAge: 24 *60 * 60 * 1000 })
        res.json([{ accessToken  },{foundUser}])
    } else {
        res.sendStatus(401);
    }


}


module.exports = { handleLogin }