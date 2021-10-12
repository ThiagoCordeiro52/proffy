const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
// import path from 'path';
const path = require('path');

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

// Configuração do nunjucks
nunjucks.configure(path.join(__dirname, "views"), {
  express: server,
  noCache: true
});

server.use(express.urlencoded({extended: true}));

// Configuração de arquivos estáticos (css, scripts, imagens)
server.use(express.static(path.join(__dirname,  "../public")));

// Rotas da aplicação;
server.get("/", pageLanding);

server.get("/study", pageStudy);

server.get("/give-classes", pageGiveClasses);

server.post("/save-classes", saveClasses);

// Porta onde ficará o servidor da aplicação
server.listen(3333);



