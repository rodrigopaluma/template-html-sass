const express = require('express'); // Importando o módulo express
const exphbs = require('express-handlebars'); // Importando o módulo express-handlebars

const app = express(); // Criando a aplicação

const hbs = exphbs.create({
    partialsDir: './views/partials'
}); // Criando o motor de templates

app.engine('handlebars', hbs.engine); // Configurando o motor de templates
app.set('view engine', 'handlebars'); // Configurando o motor de templates

app.use(express.static('./public')); // Configurando a pasta public

// Dashboard
app.get('/dashboard', (req, res)=>{
    const items = [ "Item 1", "Item 2", "Item 3" ];
    res.render('dashboard', {items});
})

// Post
app.get('/post', (req, res)=>{
    const post = {
        title: 'Título do post',
        category: 'Categoria do post',
        body: 'Corpo do post',
        comments: [
            {
                name: 'Nome do comentário',
                comment: 'Comentário do comentário'
            },
            {
                name: 'Nome do comentário',
                comment: 'Comentário do comentário'
            }
        ]
    }
    res.render('blogpost', {post});
})

// Blog
app.get('/blog', (req, res)=>{
    const posts = [
      {
        title: "Título do post",
        category: "Categoria do post",
        body: "Corpo do post",
        comments: [
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
        ],
      },
      {
        title: "Título do post 2",
        category: "Categoria do post 2",
        body: "Corpo do post 2",
        comments: [
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          }
        ],
      },
      {
        title: "Título do post 3",
        category: "Categoria do post 3 ",
        body: "Corpo do post 3",
        comments: [
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
        ],
      },
      {
        title: "Título do post 4",
        category: "Categoria do post 4",
        body: "Corpo do post 4",
        comments: [
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
          {
            name: "Nome do comentário",
            comment: "Comentário do comentário",
          },
        ],
      },
    ];

    res.render('blog', {posts});
})

// Home
app.get('/', (req, res)=>{
    const user = {
        name: 'Rodrigo',
        surname: 'Paluma',
        age: '43 anos',
    }
    const palavra = 'Teste de Palavra armazenada em variável';
    const auth = false;
    const approved = false;

    res.render('home', {user: user, palavra, auth, approved});
});

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})