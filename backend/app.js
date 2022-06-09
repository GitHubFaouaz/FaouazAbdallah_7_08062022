const express = require('express');
const authRoutes = require('./routers/authRoute');
const userRoutes = require('./routers/userRoute');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const morgan = require('morgan');

const app = express();


// app.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// permet de voir les requettes Get ,Post sur le terminal 
app.use(morgan('tiny'));
app.use(express.json());//deja inclu dans expresse


app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;