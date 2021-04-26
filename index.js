const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/home', function(req, res) {
    res.render('index');
});

app.get('/perfil/:nome?/:idade?/:cor?', (request, response) => {
    let nome = request.params.nome;
    let idade = request.params.idade;
    let cor = request.params.cor;
    response.render('perfil', {
        nome,
        idade,
        cor,
    });
});

app.get('/graduacao/:graduacao?/:instituicao?/:cidade?', (request, response) => {
    let graduacao = request.params.graduacao;
    let instituicao = request.params.instituicao;
    let cidade = request.params.cidade;
    response.render('graduacao', {
        graduacao,
        instituicao,
        cidade,
    });
});

app.get('/trabalho/:profissao?/:empresa?/:cidade?', (request, response) => {
    let profissao = request.params.profissao;
    let empresa = request.params.empresa;
    let cidade = request.params.cidade;
    response.render('trabalho', {
        profissao,
        empresa,
        cidade,
    });
});

app.get('/contato/:celular?/:telefone?/:email?', (request, response) => {
    let celular = request.params.celular;
    let telefone = request.params.telefone;
    let email = request.params.email;
    response.render('contato', {
        celular,
        telefone,
        email,
    });
});

app.get('/artigos', function(req, res) {
    res.render('artigos');
});

app.get('/novo-artigo', function(req, res) {
    res.render('novo-artigo');
});

app.post('/artigos', (req, res) => {
    let title = req.body.titulo;
    let description = req.body.descricao;
    let date = req.body.data;
    console.log(`Dados do formulario salvo: Titulo: ${title}  Descricao: ${description}  Data: ${date}`);
    res.render('artigos', {
        title,
        description,
        date,
    });
});

app.listen(9090, (erro) => {
    if(erro) {
        console.log(erro, 'Ops, servidor não conseguiu subir ...');
    } else {
        console.log('Servidor rodando no endereço: http://localhost:9090');
    }
});