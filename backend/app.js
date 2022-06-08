const express = require('express');

const userRoutes = require('./routers/user');
require('dotenv').config({path:'./config/.env'});
require('./config/db');

const app = express();





app.use(express.json());//deja inclu dans expresse

app.use('/api/auth', userRoutes)


module.exports = app;