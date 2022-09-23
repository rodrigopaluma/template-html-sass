const express = require('express'); // Importando o módulo express
const port = process.env.PORT || 8000; // Porta Heroku
const exphbs = require('express-handlebars'); // Importando o módulo express-handlebars

const app = express(); // Criando a aplicação

const hbs = exphbs.create({
    partialsDir: './views/partials'
}); // Criando o motor de templates

app.engine('handlebars', hbs.engine); // Configurando o motor de templates
app.set('view engine', 'handlebars'); // Configurando o motor de templates

app.use(express.static('./public')); // Configurando a pasta public

// Contato
app.get('/contato', (req, res)=>{
  res.render('contato');
})

// Trabalho Social
app.get('/trabalho-social', (req, res)=>{
  res.render('trabalho');
})

// Equitação
app.get('/equitacao', (req, res)=>{
  res.render('equitacao');
})

// Equoterapia
app.get('/equoterapia', (req, res)=>{
    res.render('equoterapia');
});

// Home
app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(port, ()=>{
    console.log('Servidor rodando na porta 8000');
})