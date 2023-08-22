const express = require ("express")
const exphbs = require ('express-handlebars')
const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/gatos', (req, res) =>{
    res.render('gatos')
})

app.listen(port, () =>{
    console.log(`projeto rodando na porta ${port}`);
});