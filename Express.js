const express = require('express')
const app = express()

app.get('/login', (req,res) => {
    res.send("<h2>Login page displayed</h2>")
})

app.get('/about', (req,res) => {
    res.send("<h2>About page displayed</h2>")
})

app.get('/contact', (req,res) => {
    res.send("<h2>Contact page displayed</h2>")
})

app.get('/', (req,res) => {
    res.send("<h2>Home page displayed</h2>")
})

app.listen(3000)
console.log("server running at port 3000")