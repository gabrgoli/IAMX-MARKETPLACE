const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


//initializaations
const app = express();

//Setting
app.set('port', process.env.PORT||3002);


//Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //para poder aceptar los datos de formularios
app.use(express.json());

//Global Variables
app.use((req,res,next)=>{
    next();
});

//Routes
app.use(require('./routes/index.js'));


//Public
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})