const express = require('express');
const app=express();
const path =  require('path')
const hbs  = require('hbs')
const port = 3000;

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine","hbs")

app.set('views',templatePath)
app.use(express.static(staticPath))
hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('error',{
errorMsg:'Oops! Page Not Found'
    })
})
app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})