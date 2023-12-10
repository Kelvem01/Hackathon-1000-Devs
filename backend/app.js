const express = require('express');
const rotaPaciente = require('./rotas/paciente.js');
const rotaVacina = require('./rotas/vacina.js');
const atualizarCampanha = require('./rotas/AtualizarCampanha.js'); // criado a rota de atualização de campanha

const app = express();

app.use(express.json());// iniciando o express

app.use('/paciente', rotaPaciente);
app.use('/vacina', rotaVacina);
app.use('/atualizarCampanha',atualizarCampanha);// 

const port = 3000;

app.listen(port, () => {
    console.log("Running");
})
