const express = require('express');
const app = express();

const { config } = require('./config/index');

// const { bisiesto } = require('./src/bisiesto');

app.get('/', function(req,res){
    res.send('Hello World');
});

app.get('/json', function(req,res){
    res.json({data: 'Hello World'});
});

// app.get('/bisiesto/:year', function(req,res){
//     const year = req.params.year;
//     res.send(bisiesto(year));
// });

app.listen(config.port, () => {
    console.log(`Listening in http://localhost:${config.port}/`);
});