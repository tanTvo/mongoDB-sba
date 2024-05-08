require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { describe } = require('node:test');

const app = express();
const port = 5001 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static files-mw
app.use(express.static('public'));

//te
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//home
app.get('/', (req, res)=>{
    const locals = {
        title: 'NodeJs',
        description: 'Free Nodejs User Management System'
    }




    res.render('index', locals);
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});