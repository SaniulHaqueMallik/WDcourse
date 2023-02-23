const { request, response } = require('express');
const express = require('express')

const app = express();
const port = 3000

app.get('/',(req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact me at saniulmallik@techis.io</h1>')
})

app.get('/about',(req,res) => {
    res.send('<h1>WEB DEVELOPER</h1>')
})

app.listen(port, () => {
    console.log(`app example is listening on ${port}`)
})
