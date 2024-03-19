const express = require('express')
const app = express()
const porta = 4000

const Rotas = require('./Rotas/Rotas')

app.use(express.json())
app.use(express.static('frontend'))


app.listen(porta,bootstrap)

function bootstrap(){
    console.log('SERVIDOR INICIADO EM -> http://localhost:' + porta);
}

Rotas.inicializarRotas(app)
