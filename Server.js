require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(cookieParser());

app.use('/register', require('./routes/register.js'))
app.use('/userImg', require('./routes/api/userImg.js'))
app.use('/auth', require('./routes/auth.js'))
app.use('/refresh', require('./routes/refresh.js'))
app.use('/logout', require('./routes/logout.js'))
app.use('/recetasGet', require('./routes/api/recetasGet.js'))
app.use(verifyJWT)
app.use('/recetas', require('./routes/api/recetas.js'))
app.use('/recetaImg', require('./routes/api/recipeImg.js'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running con port ${PORT}`))
})

