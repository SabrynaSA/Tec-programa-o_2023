const express = require('express');


// Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/',(req,res) =>{
    res.send('Olá Mundo 2023 !!!');
});

router.get('/cadastro',(req,res) =>{
    res.send('Pagina de cadastro da aplicação');
});

router.get('/contato',(req,res) =>{
    res.send('Pagina com informações do contato');
});

module.exports = router;