const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "84981899213",
    bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passarem por uma das minhas explosões.",
    subject: "Química",
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
  },
  {
    name: "Daniele Evangelho",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "84981899213",
    bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passarem por uma das minhas explosões.",
    subject: "Química",
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
  },

  {
    name: "Mayk Brito",
    avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
    whatsapp: "84981899213",
    bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passarem por uma das minhas explosões.",
    subject: "Química",
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
  }
];

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1;
  return subjects[arrayPosition];
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// Configuração do nunjucks
nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

// Configuração de arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

// Rotas da aplicação;
server.get("/", (request, response) => {
  return response.render("index.html");
});

server.get("/study", (request, response) => {
  const filters = request.query;

  return response.render("study.html", {proffys, filters, subjects, weekdays});
});

server.get("/give-classes", (request, response) => {
  const data = request.query;

  // Transforma as chaves do objeto em um array, daí fica fácil verificar se há elementos
  const isNotEmpty = Object.keys(data).length > 0;

  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    proffys.push(data);

    return response.redirect("/study");
  }

  return response.render("give-classes.html", {weekdays, subjects})
})

// Porta onde ficará o servidor da aplicação
server.listen(3333);