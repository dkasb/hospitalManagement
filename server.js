const express = require('express');
const fs = require('fs');
const app = express();
var mysql = require('mysql');
const port = 3001;
app.set('view engine' , 'ejs');
app.use(express.static('./public'));
var bodyParser = require('body-parser')
app.use(bodyParser.json())
require('./packages/routes')(app , fs)




//app.use('/' , require('./packages')(app))
//app.get('/', function(req, res){
//res.render('../packages/main/views/index.ejs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
