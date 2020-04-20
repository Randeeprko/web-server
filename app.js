const express = require('express')
const app = express()
const path = require('path')

//app.use(express.static(__dirname))
app.get('/', (req,res) => {
    console.log('request for index.html')
    res.sendFile(path.join(__dirname+"/views/index.html"))
})

app.get('/saveUser', (req, res) => {
    res.json({username: req.query.username, password: req.query.password})
})

app.get('/home', (req, res) => {
    res.set({"Content-Type": "text/plain"})
    res.send('Welcome')
})

app.get('/register', (req, res) => {
    console.log('request for register.html file')
    res.sendFile(path.join(__dirname+"/views/register.html"))
})

app.get('/about', (req, res) => {
    console.log('Request for About us page')
    res.send('About us page')
})
app.listen(3000)

console.log('Server started at port 3000!')
