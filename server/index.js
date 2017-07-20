const express = require('express');
const bodyParser = require('bodyParser');
const session = require('express-session');

const checkForSession = require('../middlewares/checkForSession');

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: 'lkjbioanfejknid89374589347DSVNNKJFDK',
    resave: false,
    saveUninitialized: false
}));
app.use( checkForSession );

const port = 3000;
app.listen( port, () => { sonsole.log(`Server listening on port ${port}.`); } );