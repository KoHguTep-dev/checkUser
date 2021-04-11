const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({extended: false});
const nodeCmd = require('node-cmd');
const users = nodeCmd.runSync('wmic useraccount get name', function(err, data, stderr) {});

app.listen(3000, () => {
    console.log('Server ready')
    })

app.get('/', parser, function(req, res){
    res.sendFile('index.html', { root: __dirname });
});

app.post('/answer', parser, function (req, res){
    if( users.data.match(req.body.name)) res.send("Пользователь есть");
    else res.send("Такого пользователя нет");
});