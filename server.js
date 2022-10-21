//importa o express
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express()

const mongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv: mongodb+srv://dbuser:<dbuser>@cluster0.vocyxsz.mongodb.net/?retryWrites=true&w=majority"

//permite o servidor com o navegador

app.listen(3000, function(){
    console.log("o nosso servidor está na porta 3000")
})

//conectando o nosso banco
MongoClient.connect(uri,(err,client)=>{
    if(err) return console.log(err)
    //colocando o banco de dados
    db = client.db('teste-db')

    app.listen(3000,() =>{
        console.log('servidor rodando 3000')
    })
})

app.set("view engine","ejs")
//rederisando o index
app.get('/',(req, res)=>{res.render('index.ejs')})

app.post("/show",(req, res)=>{
    console.log(req.body)
})

