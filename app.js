require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { describe } = require('node:test');
const connectDB = require('./server/config/db')

const app = express();
const port = 5001 || process.env.PORT;
//database
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static files-mw
app.use(express.static('public'));

//te
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes
 app.use('/', require('./server/routes/customer'))

//404
app.get('*', (req, res) => {
    res.status(404).render('404');
  });
  
  
app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});