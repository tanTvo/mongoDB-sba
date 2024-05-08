require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

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

app.get('/', (req, res)=>{
    res.send('Hello universe');
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});