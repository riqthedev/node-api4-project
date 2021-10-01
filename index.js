
 require('dotenv').config()
console.log("Hello World!")

const express = require('express')

const server = express()
server.use(express.json())

const port = process.env.PORT || 3000

server.get('/' , (req,res) => {
    res.json({message: "Happy Path!"})
})

server.get('/hello', (req,res) => {
    res.send('<h1> Hello There! </h1>')
})

server.listen(port, () =>  {
console.log(`listening on ${port}`)
})

