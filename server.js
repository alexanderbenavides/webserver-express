const express = require('express')
const app = express();

const hbs = require('hbs');

require('./helpers/helpers');

const port = process.env.PORT ||	3000 ;
app.use(express.static(__dirname + '/public'));
 
///Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
  res.render('home', {
    nombre : 'alexander',
    anio: new Date().getFullYear()
  });
});
 
app.get('/about',  (req, res) => {
  res.render('about', {
    anio: new Date().getFullYear()
  });
});

app.listen(port,() =>{
console.log(`Escchando el puerto ${port}`);
})
