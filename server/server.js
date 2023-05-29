// server/index.js

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('../routes');

const app = express();
const port = process.env.PORT || 3000;
const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database:'aplicacion_iglesia'
}

// Middlewares ------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json())
app.use(cors());

// Rutas ------------------------------------------------------
//
// Escuchar metodo GET
app.get('/', (req, res) => {
    res.send("Hola desde el Servidor!")
})
// Ruta por defecto para llamar nuestro archivo de rutas
// Es recomendable escribir algo despues de / para no 
// confundir con la ruta por defecto
app.use('/api', routes)

// Servidor corriendo ------------------------------------------
//
// Escuchar en puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en puerto: ${port}`);
});