// Cargamos las dependencias
const express = require('express');
const request = require('request');

// Creamos la app
const app = express();

// TOKEN
const token = '141fe367df247f72100c9037d5fcb573e8b9af2fa30b72334be0a161b56a6585';

//url
const url = 'https://gorest.co.in/public/v2/users';

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Peticion del id
    request(url, (err, resp, body) => {
        let _body = JSON.parse(body);
        let id = _body[0].id;
        console.log(id);
    });
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
    // Peticion
    
    let id = req.body.id;
    let nombre = req.body.nombre;
    let genero = req.body.genero;
    let email = req.body.email;
    // if(id.length() < 4 || id.length() > 11) {
    //     throw new Error("id tiene que ser de minimo 4 caracteres y maximo de 11");
    // }
});

// Escuchando el puerto 3000
PORT = 3000 || process.env.PORT;
app.listen(PORT);
