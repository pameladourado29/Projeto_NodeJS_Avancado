const express = require('express')
const app=express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//declarando que vou usar o ejs
app.set('view engine','ejs')
//Mostrando para o Express onde estaminha pasta views
app.set('views', './src/views')

//renderizando minha pagina principal
server.get('/',(req,res)=> {
    //chmamdo o arquivo da minha view
    res.render('index', { dado: ""})
})

})
//pegando os dados da minha view
app.post('/envia-cep', async(req, res) =>{
    const {cep} = req.body
    // console.log(cep)
    const resultado = await buscaCep(cep)
    console.log(resultado)

    res.render('resultado',{dado:resultado})
})


app.listen(3333 , (req, res) => {
    console.log("Ok")
})

