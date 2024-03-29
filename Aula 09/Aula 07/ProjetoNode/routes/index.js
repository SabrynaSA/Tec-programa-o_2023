const express = require('express');


// Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
/*
router.get('/',(req,res) =>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá' + nome + ', você tem ' + idade + ' anos de idade');
});

router.get('posts/:id',(req,res) =>{
    let id = req.params.id;
    res.send('ID do post:'+id);
});


router.get('/',(req,res) =>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome
    res.json({
        nomeCompleto:nome+' '+sobrenome
    });
});
*/

router.get('/',(req,res) =>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome
    res.json(req.query);
});

router.get('/cadastro',(req,res) =>{
    res.send('Pagina de cadastro da aplicação');
});

router.get('/contato',(req,res) =>{
    res.send('Pagina com informações do contato');
});

module.exports = router;