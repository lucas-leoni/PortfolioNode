const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Você está na página principal do Portfolio');
});

app.get('/home', function(req, res) {
    res.send('Você está na página principal do Portfolio');
});

app.get('/perfil', function(req, res) {
    res.send('Você está na página perfil');
});

app.get('/perfil/:nome/:idade?/:cor?', (request, response) => {
    const nome = request.params.nome;
    const idade = request.params.idade;
    const cor = request.params.cor;
    response.send(`Eu sou o ${nome}, tenho ${idade} anos e sou da cor ${cor}`);
});

app.get('/graduacao', function(req, res) {
    res.send('Você está na página graduação');
});

app.get('/graduacao/:graduacao/:instituicao/:cidade', (request, response) => {
    const graduacao = request.params.graduacao;
    const instituicao = request.params.instituicao;
    const cidade = request.params.cidade;
    response.send(`Eu estudo ${graduacao}, na faculdade ${instituicao} que se localiza em ${cidade}`);
});

app.get('/trabalho', function(req, res) {
    res.send('Você está na página trabalho');
});

app.get('/trabalho/:profissao/:empresa/:cidade', (request, response) => {
    const profissao = request.params.profissao;
    const empresa = request.params.empresa;
    const cidade = request.params.cidade;
    response.send(`Eu sou ${profissao}, na empresa ${empresa} que se localiza em ${cidade}`);
});

app.get('/contato', function(req, res) {
    res.send('Você está na página contato');
});

app.get('/contato/:celular/:telefone/:email', (request, response) => {
    const celular = request.params.celular;
    const telefone = request.params.telefone;
    const email = request.params.email;
    response.send(`Meus contatos são: Celular: ${celular} | Telefone: ${telefone} | email ${email}`);
});

app.listen(9090, (erro) => {
    if(erro) {
        console.log(erro, 'Ops, servidor não conseguiu subir ...');
    } else {
        console.log('Servidor rodando no endereço: http://localhost:9090');
    }
});